import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the shopping cart icon

const Header = () => {
  return (
    <header>
      <nav className='Navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li>
            <Link to="/cart">
              Cart <FontAwesomeIcon icon={faShoppingCart} /> {/* Use the imported icon */}
            </Link>
          </li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
