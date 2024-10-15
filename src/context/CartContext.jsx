import React, { createContext, useState, useContext, useEffect } from 'react';
import { AuthContext } from '../pages/AuthContext';

// Create the CartContext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  // Retrieve cart items from localStorage when the app initializes
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (product) => {
    if (!isLoggedIn) {
      alert('You need to log in to add items to the cart!');
      return;
    }

    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.id === product.id);

    let updatedCart;

    if (existingItem) {
      // If item already exists in the cart, increase the quantity
      updatedCart = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // If item is not in the cart, add it with quantity 1
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart); // Update the cart state

   
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);

    // Update localStorage after removing an item
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  // Return the context provider with the cart values
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
