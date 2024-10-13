import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Import CartContext

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Get cartItems and removeFromCart from context

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <div className="cart-actions">
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove from cart
              </button>
              <button className="buy-now-btn">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
