import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the shopping cart icon
import { CartContext } from '../context/CartContext'; // Adjust the import path as necessary

function ProductsCard({ Items: products }) {
  const { addToCart } = useContext(CartContext); // Accessing the addToCart function from context

  return (
    <div className='ProductsCard'>
      <h1>Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
            </Link>
            <h3>{product.title.substring(0, 30)}...</h3>
            <p>${product.price}</p>
            
            {}
            <button onClick={() => addToCart(product)}>
              add to cart <FontAwesomeIcon icon={faShoppingCart} /> {}
              {product.addedToCart && <span>Added to cart!</span>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsCard;
