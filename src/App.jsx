// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ContactUs from './pages/ContactUs';

const App = () => {
  const [cartItems, setCartItems] = useState(0); // Manage cart item count
  const [CartItem, setCartItem] = useState([]); // Manage cart items array

  // Function to add an item to the cart
  const addToCart = () => {
    if (cartItems >= 18) {
      setCartItems(0);
      alert("Cart Limit Reached");
    } else {
      setCartItems((prevCount) => prevCount + 1); // Increment by 1 on each add to cart
    }
  };

  // Fetch cart items from localStorage on component load
  useEffect(() => {
    const newarr = JSON.parse(localStorage.getItem("CartItem")) || []; // Handle empty cart case
    setCartItem(newarr); // Set the cart items array
    setCartItems(newarr.length); // Update cart item count based on the stored array
  }, []);

  return (
    <Router>
      {/* Pass cartItems and addToCart function to Header and ProductListing */}
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home setCartItems={setCartItems} />} />
        <Route path="/products" element={<ProductListing addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart setCartItems={setCartItems} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
