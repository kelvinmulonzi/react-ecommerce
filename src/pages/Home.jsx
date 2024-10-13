// src/pages/Home.jsx
import React, { useState } from 'react';
import Portal from '../Portal/Portal';
import Login from '../pages/Login';
 // Make sure to import the updated CSS file

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);


  const closeLogin = () => setIsLoginOpen(false);

  return (
    <div className="Home">
      <h1 className="hero-title">Welcome to Our Store</h1>
      <p className="hero-description">
        Discover our amazing products and get ready to explore a wide range of items that meet your needs.
      </p>

     

      {isLoginOpen && (
        <Portal>
          <div className="login-popup">
            <Login onClose={closeLogin} />
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Home;
