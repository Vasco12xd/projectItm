import React from 'react';
import './App.css';
import Main from './components/Main';
import Home from './components/home';
import Login from './components/login';
import MyProfile from './components/MyProfile';
import Order from './components/order';
import Cart from './components/cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const handleAddToCart = (product: any) => {
    setCartItems([...cartItems, product]);
  };

  const images = [
    {
      src: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
      alt: 'Imagen 1',
      text: 'Texto sobre la Imagen 1',
    },
    {
      src: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
      alt: 'Imagen 2',
      text: 'Texto sobre la Imagen 2',
    },
  ];
  
  return (
    <div className='App container'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main images={images}/>} />
        <Route path="/home" element={<Home  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/order" element={<Order onAddToCart={handleAddToCart}/>} />
        <Route path="/cart" element={<Cart items={cartItems}/>} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
