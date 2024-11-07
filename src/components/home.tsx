import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import '../components/scss/Home.scss'; // Asegúrate de crear este archivo para los estilos
import Navbar from './navBar';

const Home: React.FC = () => {
  const items = [
    {
      image: 'https://via.placeholder.com/600x400?text=Carrusel+1',
      title: 'Título 1',
      content: 'Contenido 1', 
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Carrusel+2',
      title: 'Título 2',
      content: 'Contenido 2',
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Carrusel+3',
      title: 'Título 3',
      content: 'Contenido 3',
    },
  ];

  const itemTemplate = (item: any) => {
    return (
      <div className="carousel-item">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </div>
    );
  };

  return (
    <div className="home">
      <h1>Bienvenido a la Página Principal</h1>
      <h2>Carrusel 1</h2>
      <Carousel value={items} itemTemplate={itemTemplate} numVisible={1} numScroll={1} />
      <h2>Carrusel 2</h2>
      <Carousel value={items} itemTemplate={itemTemplate} numVisible={1} numScroll={1} />
      <h2>Carrusel 3</h2>
      <Carousel value={items} itemTemplate={itemTemplate} numVisible={1} numScroll={1} />
      <Navbar />
    </div>
  );
};

export default Home;