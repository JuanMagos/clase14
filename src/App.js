import './App.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import CartProvider from './context/cart/CartProvider';
import CartContainer from './cartConainer/CartContainer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="details/:id" element={<ItemDetailContainer />} />
          <Route path="contact" element={<div>Contact</div>} />
          <Route path="cart" element={<CartContainer />} />
          <Route path="*" element={<div>No existe </div>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
