import { useState, useEffect } from 'react';
import ItemList from '../ItemList.js/ItemList';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#282c34',
  },
};

export const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('');

  const getProducts = async () => {
    const db = getFirestore();
    let q = filter
      ? query(collection(db, 'items'), where('categoryId', '==', filter))
      : collection(db, 'items');

    await getDocs(q).then((snapshot) => {
      const dataExtraida = snapshot.docs.map((datos) => {
        return { ...datos.data(), id: datos.id };
      });
      setList(dataExtraida);
      console.log(dataExtraida);
    });
  };

  const setFilterValue = (e) => {
    const filter = e.target.value;
    setFilter(filter);
    console.log(filter);
    getProducts();
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div style={styles.container}>
      <ItemList list={list} setFilterValue={setFilterValue} />
    </div>
  );
};

export default ItemListContainer;
