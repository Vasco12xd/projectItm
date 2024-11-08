import '../components/scss/Main.scss';
import React, { useState } from 'react';
import './scss/Main.scss'; // Asegúrate de crear este archivo para los estilos

interface CarouselProps {
  images: { src: string; alt: string; text: string }[
    
  ];
}

const Main: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      // Redirigir a una nueva página después de la última imagen
      window.location.href = '/login'; // Cambia '/nueva-pagina' a la ruta deseada
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-image-container">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="carousel-image" />
        <h1 className="carousel-text">¡Te damos la bienvenida A la mesa!</h1>
        <p className="carousel-text">¿Ya tienes en mente qué plato vas a disfrutar hoy?</p>
      </div>
      <div className="carousel-controls">
        <button onClick={() => window.location.href = '/login'}>Saltar</button>
        <button onClick={nextImage}>{currentIndex === images.length - 1 ? 'Ir a Página' : 'Siguiente'}</button>
      </div>
    </div>
  );
};

export default Main
