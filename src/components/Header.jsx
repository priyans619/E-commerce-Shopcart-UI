import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';

const Header = () => {
  // Get cart state from Redux store
  const cart = useSelector(state => state.cart);
  const cartItemCount = cart.length;

  return (
    <header className="fixed top-0 left-0 right-0 sm:px-14 lg:px-24 bg-white p-2 border-b border-gray-400 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="E-commerce" className="h-7 sm:h-8 md:h-10 lg:h-12" />
        </Link>
        <nav className="flex items-center">
          <Link to="/products" className="text-black text-xl mx-3 flex items-center">
            <FaHome className="mr-2 text-blue-900" /> Home
          </Link>
          <Link to="/cart" className="text-black text-xl mx-3 flex items-center relative">
            <div className="relative">
              <FaShoppingCart className="text-blue-900" />
              {cartItemCount > 0 && (
                <span className="absolute top-[-8px] right-[-8px] bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
            <span className="ml-2">Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
