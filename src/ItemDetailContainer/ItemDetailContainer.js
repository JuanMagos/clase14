import { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  const getProduct = async () => {
    const db = getFirestore();

    const productConfig = doc(db, 'items', id);
    getDoc(productConfig).then((snapshot) => {
      setProduct(snapshot.data());
      console.log(snapshot.data());
    });
  };

  useEffect(() => {
    console.log(id);
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="modal-container">
      {product && <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
