import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed ">
      <div className="container ">
        <Link to="/">
          <img src={logo} alt="E-commerce" className="h-7 sm:h-8 md:h-10 lg:h-12" />
        </Link>
      </div>
    </header>
  )
}

export default Header