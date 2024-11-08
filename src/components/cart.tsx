import React from 'react';
import Navbar from './navBar';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartProps {
  items: Product[];
}

const Cart: React.FC<CartProps> = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
      <Navbar />
    </div>
  );
};

export default Cart;