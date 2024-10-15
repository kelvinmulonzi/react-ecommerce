import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { CartContext } from '../context/CartContext'; 
import { AuthContext } from '../pages/AuthContext'; 

function ProductsCard({ Items: products }) {
  const { addToCart } = useContext(CartContext); // Accessing the addToCart function from context
  const { isLoggedIn } = useContext(AuthContext); // Accessing the isLoggedIn state from context

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
            <button className='Cartbutton' onClick={() => {
              if (!isLoggedIn) {
                alert('Please log in to add items to the cart.');
              } else {
                addToCart(product);
                alert('Item added to cart!');
              }
            }}>
              add to cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsCard;
