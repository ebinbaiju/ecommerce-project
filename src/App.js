import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Cart from './components/pages/Cart';
import Contact from './components/pages/Contact';
import Product from './components/pages/Product';
import Singlepage from './components/pages/Singlepage';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import { Route, Routes } from 'react-router-dom';
import {AuthProvider} from '../src/components/AuthContext'
import { useState } from 'react';
import Checkout from './components/pages/Checkout';
import PaymentGateway from './components/pages/PaymentGateway';
import Order from './components/pages/Order';


function App() {
  const [cart, setCart] = useState([]);

  const handleQuantityChange = (itemId, newQuantity) => {
    newQuantity = Math.max(1, newQuantity);
  
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
      )
    );
  };
  const handleDeleteItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  } else {
    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
  }


  };
  return (
   
    <AuthProvider>
    <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Cart" element={<Cart cart={cart} handleQuantityChange={handleQuantityChange} handleDeleteItem={handleDeleteItem}/>}/>
          <Route path='/Product' element={<Product cart={cart} addToCart={addToCart}/>} />
          <Route path='/Contact' element={<Contact />} />
          <Route path="/Singlepage/:productId" element={<Singlepage />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Checkout'element={<Checkout cart={cart} />} />
          <Route path='/payment-gateway/:userId/:userSessionToken/:totalPrice' element={<PaymentGateway/>}/>
          <Route path='/Order'element={<Order />}/>

        </Routes>
    </AuthProvider>
  
  );
}

export default App;
