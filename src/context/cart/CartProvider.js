import { useState } from 'react';
import { cartContext } from './cartContext';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
