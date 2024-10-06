import React, { useState } from 'react';

const Cart = () => {
  const [cartItems] = useState([
    { id: 1, name: 'Product 1', quantity: 2, price: 100 },
  ]);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}</p>
    </div>
  );
};

export default Cart;
