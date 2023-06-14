import React from 'react';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <FaShoppingCart />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/store" className="nav-link">Store</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
        </ul>
      </nav>
      <CartIcon />
    </header>
  );
};

export default Header;
