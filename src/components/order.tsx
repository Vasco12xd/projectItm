import React, { useState } from 'react';
import Navbar from './navBar';

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Producto 1', price: 10 },
  { id: 2, name: 'Producto 2', price: 20 },
  { id: 3, name: 'Producto 3', price: 30 },
];

const Order: React.FC<{ onAddToCart: (product: Product) => void }> = ({ onAddToCart }) => {
  return (
    <div>
      <h2>Ordenar Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => onAddToCart(product)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
      <Navbar />
    </div>
  );
};

export default Order;