import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed ">
      <div className="container ">
        <Link to="/">
          <img src={logo} alt="E-commerce" className="h-7 sm:h-8 md:h-10 lg:h-12" />
        </Link>
        <nav>
          <Link to="/products" className="text-white mx-3">Home</Link>
          <Link to="/products" className="text-white mx-3">Products</Link>
          <Link to="/cart" className="text-white mx-3">Cart</Link>
          <Link to="/account" className="text-white mx-3">Account</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header