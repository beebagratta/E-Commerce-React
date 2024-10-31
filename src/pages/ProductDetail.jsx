// src/pages/ProductDetail.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductDetail = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex">
        <img src="https://via.placeholder.com/300" alt="Product" className="w-1/2" />
        <div className="w-1/2 ml-8">
          <h1 className="text-3xl font-bold mb-4">Product Name</h1>
          <p className="text-gray-700 mb-4">$99.99</p>
          <p className="mb-4">This is a detailed description of the product.</p>
          <button className="bg-purple-600 text-white font-bold py-2 px-6 rounded hover:bg-purple-700 transition">
            <FaShoppingCart className="inline-block mr-2" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
