// src/pages/Checkout.jsx
import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <form className="bg-white p-8 shadow-lg">
        <label className="block mb-4">
          <span className="text-gray-700">Full Name</span>
          <input className="mt-2 block w-full p-2 border" type="text" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Address</span>
          <input className="mt-2 block w-full p-2 border" type="text" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Credit Card</span>
          <input className="mt-2 block w-full p-2 border" type="text" />
        </label>
        <button className="mt-6 bg-purple-600 text-white font-bold py-2 px-6 rounded hover:bg-purple-700 transition">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
