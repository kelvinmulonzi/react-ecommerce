import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';

import ProductDetail from './pages/ProductDetail';

import './App.css';

function App() {
  return (
    
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
           
          </Routes>
          <Footer />
        </div>
      </Router>
  
  );
}

export default App;
