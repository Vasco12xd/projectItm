import React from 'react';
import './App.css';
import Main from './components/Main';
import Home from './components/home';
import Login from './components/login';
import MyProfile from './components/MyProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const images = [
    {
      src: 'https://via.placeholder.com/600x400?text=Imagen+1',
      alt: 'Imagen 1',
      text: 'Texto sobre la Imagen 1',
    },
    {
      src: 'https://via.placeholder.com/600x400?text=Imagen+2',
      alt: 'Imagen 2',
      text: 'Texto sobre la Imagen 2',
    },
  ];
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main images={images}/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
