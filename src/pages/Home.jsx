// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { FaShippingFast, FaStar, FaShoppingCart } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
const Home = ({setCartItems}) => {
  const [CartItem, setCartItem] = useState([])
  useEffect(() => {
    let newarr=JSON.parse(localStorage.getItem("CartItem"));
    setCartItem(newarr);
    console.log(CartItem);
    
    setCartItems(CartItem.length)
    
  }, [])
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center py-16">
        <h1 className="text-5xl font-bold">Welcome to BaElect</h1>
        <p className="mt-4">Discover the best products at unbeatable prices!</p>
        <button className="mt-8 bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-purple-100 transition">
          <FaShoppingCart className="inline-block mr-2" /> Shop Now
        </button>
      </section>

      {/* Categories */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition">
            <FaShippingFast className="text-4xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Fast Shipping</h3>
            <p>Quick and reliable delivery for all your purchases.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Top Rated</h3>
            <p>Our customers love the quality of our products.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition">
            <FaShoppingCart className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Wide Variety</h3>
            <p>Explore a wide range of products.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
