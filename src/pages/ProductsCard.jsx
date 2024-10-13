import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { CartContext } from '../context/CartContext';
// Adjust the import path as necessary

function ProductsCard({ Items: products }) {
  const { addToCart } = useContext(CartContext); // Accessing the addToCart function from context

  return (
    <div className='ProductsCard'>
      <h1>Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title.substring(0, 30)}...</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsCard;
