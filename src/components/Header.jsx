import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 sm:px-14 lg:px-24 bg-white p-2 border-b border-gray-400 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="E-commerce" className="h-7 sm:h-8 md:h-10 lg:h-12" />
        </Link>
        <nav className="flex items-center">
          <Link to="/products" className="text-black text-xl mx-3 flex items-center">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/cart" className="text-black text-xl mx-3 flex items-center">
            <FaShoppingCart className="mr-2" /> Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
