// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
const Header = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div>
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">My Store</Link>

      {/* Hamburger icon for mobile */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu Items */}
      <div className={`flex-col sm:flex-row items-center absolute sm:static w-full sm:w-auto bg-gray-800 sm:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-16 left-0' : '-top-64 sm:top-0'} sm:flex`}>
        

        <Link to="/cart" className="flex relative mb-2 sm:mb-0">
          <FaShoppingCart className="ml-4 cursor-pointer text-white hover:text-purple-400 transition duration-200" />
          {/* Display the cart items count */}
          <p className="text-red-500 absolute bottom-2 left-8 text-sm">
            {cartItems > 0 ? cartItems : 0}
          </p>
        </Link>

        <Link to="/products" className="ml-0 sm:ml-4">
          <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition mb-2 sm:mb-0">
            Products
          </button>
        </Link>

        <Link to="/" className="ml-0 sm:ml-4">
          <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition mb-2 sm:mb-0">
            Home
          </button>
        </Link>
      </div>
    </nav>
    </div>
  );
};

export default Header;
