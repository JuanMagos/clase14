import './CartContainer.css';
import { useContext, useState } from 'react';
import { cartContext } from '../context/cart/cartContext';
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  updateDoc,
} from 'firebase/firestore';

const CartContainer = () => {
  const { cart } = useContext(cartContext);
  const [orderId, setOrderId] = useState('');
  console.log(cart);

  const createOrder = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const orderCollectionQuery = collection(db, 'orders');
    const order = {
      buyer: { name: 'Juan', phone: '1122334455', email: 'tester@gmail.com' },
      items: cart.map((product) => ({
        name: product.title,
        price: product.price,
      })),
      total: cart.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      ),
    };

    await addDoc(orderCollectionQuery, order)
      .then((response) => {
        console.log(response.id);
        setOrderId(response.id);
        return response.id;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateOrder = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const orderQuery = doc(db, 'orders', orderId);
    await updateDoc(orderQuery, {
      buyer: { name: 'Eric', phone: '9988776655', email: 'tester3@gmail.com' },
    })
      .then(() => {
        console.log('El pedido se actualizo correctamente');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Cart</h2>
        <p>No items in cart</p>
      </div>
    );
  }
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <ul
        style={{
          listStyle: 'none',
          width: '80%',
        }}
      >
        {cart?.map((item, index) => (
          <li key={index} className="cart-item">
            <p>{item?.title}</p>
            <p>{item?.quantity}</p>
            <p>{item?.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={createOrder}>Crear orden</button>
      <button onClick={updateOrder}>Actualizar orden</button>
    </div>
  );
};

export default CartContainer;
