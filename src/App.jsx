import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext';
import Signup from './pages/Signup';
import { AuthProvider } from './pages/AuthContext';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AuthProvider>
        <CartProvider>
          <Routes>
           <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </CartProvider>
        <Footer />
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;