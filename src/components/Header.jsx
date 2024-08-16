import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-white p-4 border-b border-gray-400">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="E-commerce" className="h-7 sm:h-8 md:h-10 lg:h-12" />
        </Link>
        <nav>
          <Link to="/" className="text-black text-xl mx-3">Home</Link>
          <Link to="/" className="text-black text-xl mx-3">Products</Link>
          <Link to="/" className="text-black text-xl mx-3">Cart</Link>
          <Link to="/" className="text-black text-xl mx-3">Account</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header