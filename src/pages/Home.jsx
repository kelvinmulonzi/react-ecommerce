import React, { useState, useEffect } from 'react';
import Portal from '../Portal/Portal';
import Login from '../pages/Login';
import { Link } from 'react-router-dom'; 

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [products, setProducts] = useState([]); 

  const closeLogin = () => setIsLoginOpen(false);

  // Fetch a few products from the Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=4'); 
        const data = await response.json();
        setProducts(data); // Set the products data to state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="Home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Store</h1>
        <p className="hero-description">
          Discover our amazing products and get ready to explore a wide range of items that meet your needs.
        </p>
        <Link to="/products">
          <button className="cta-button">Shop Now</button>
        </Link>
      </div>

      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
              </Link>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>

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
