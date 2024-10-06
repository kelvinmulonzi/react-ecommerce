import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Import CartContext

const Cart = () => {
  const { cartItems } = useContext(CartContext); // Get cartItems from context

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
