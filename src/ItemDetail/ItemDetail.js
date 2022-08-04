import { useContext, useState } from 'react';
import { cartContext } from '../context/cart/cartContext';
import { useNavigate } from 'react-router-dom';
import './ItemDetail.css';

export const ItemDetail = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const addToCart = () => {
    setCart([...cart, { ...product, quantity }]);
    alert('Added to cart');
  };

  const goBack = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const onChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="detail-container">
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'flex-start',
          margin: '0 auto',
        }}
      >
        <button className="back-button" onClick={goBack}>
          X
        </button>
      </div>
      <img className="detail-image" src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <div className="product-information">
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
      </div>
      <div>
        <input
          onChange={onChange}
          type="number"
          min="1"
          max="10"
          defaultValue={quantity}
        />
        <button onClick={() => addToCart()} className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
