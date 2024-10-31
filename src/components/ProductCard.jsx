// src/components/ProductCard.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ name, price, productImg, addToCart, id }) => {
  // Function to handle the click event for adding a product to the cart
  function handleClick() {
    const newProduct = {
      name: name,
      price: price,
      productImg: productImg,
      key: id, // Unique key for the product
    };

    // Retrieve existing cart items from localStorage or initialize an empty array
    const storedProduct = JSON.parse(localStorage.getItem("CartItem")) || [];

    // Check if the product already exists in the cart
    const productExists = storedProduct.some(item => item.key === id);
    if (productExists) {
      alert("Added already"); // Alert if the product is already in the cart
    } else {
      addToCart(); // Call the addToCart function passed as a prop
      const updatedProducts = [...storedProduct, newProduct]; // Add the new product to the cart
      localStorage.setItem("CartItem", JSON.stringify(updatedProducts)); // Save updated cart to localStorage
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={productImg} // Image source for the product
        alt={name} // Alt text for the image
        className="w-full max-h-[50%] object-cover mb-4 rounded" // Tailwind CSS classes for styling
      />
      <h3 className="text-lg font-bold mb-2">{name}</h3> 
      <p className="text-gray-700 mb-2">${price}</p> 
      <div className="flex items-center">
        {/* Star rating display */}
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-gray-300" />
      </div>
      <button
        className="mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition"
        onClick={handleClick} // Click event handler for the button
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
