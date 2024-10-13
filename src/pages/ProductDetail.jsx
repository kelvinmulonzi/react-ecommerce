// src/components/ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Importing the CSS file

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Fetching product with id: ${id}`);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Product data:', data);
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-detail-container">
      {product && (
        <div className="product-card">
          <img className="product-image" src={product.image} alt={product.title} />
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
