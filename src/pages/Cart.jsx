import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Cart = ({ setCartItems }) => {
  const [getCartArray, setGetCartArray] = useState([]);
  const [total, setTotal] = useState(0);

  const GetFromLs = () => {
    const storedItems = JSON.parse(localStorage.getItem("CartItem"));
    if (Array.isArray(storedItems)) {
      setGetCartArray(storedItems.map(item => ({ ...item, quantity: item.quantity || 1 })));
    } else {
      setGetCartArray([]);
    }
  };

  const handleRemove = (id) => {
    const updatedCart = getCartArray.filter((item) => item.key !== id);
    setGetCartArray(updatedCart);
    localStorage.setItem("CartItem", JSON.stringify(updatedCart));
  };

  const HandleQuantityIncrease = (id) => {
    const updatedCart = getCartArray.map(item =>
      item.key === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setGetCartArray(updatedCart);
    localStorage.setItem("CartItem", JSON.stringify(updatedCart));
  };

  const HandleQuantityDecrease = (id) => {
    const itemToUpdate = getCartArray.find(item => item.key === id);
    if (itemToUpdate.quantity <= 1) {
      alert('Quantity cannot be less than 1');
    } else {
      const updatedCart = getCartArray.map(item =>
        item.key === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setGetCartArray(updatedCart);
      localStorage.setItem("CartItem", JSON.stringify(updatedCart));
    }
  };

  useEffect(() => {
    const calculatedTotal = getCartArray.reduce((acc, item) => acc + Number(item.price) * (item.quantity || 1), 0);
    setTotal(calculatedTotal);
    setCartItems(getCartArray.length);
  }, [getCartArray, setCartItems]);

  useEffect(() => {
    GetFromLs();
  }, []);
  function HandlePayment() {
    document.querySelector(".paymentForm").style.display = "flex";
  };
  function ClosePaymentForm() {
    document.querySelector(".paymentForm").style.display = "none";
  };

  function PaymentSuccessful() {
    let inputs = document.querySelectorAll("input");
    let allFilled = true;

    inputs.forEach((input) => {
      if (input.value === "") {
        allFilled = false;
      }
    });

    if (allFilled) {
      alert("Payment Successful!");
      // Proceed with payment logic here
    } else {
      alert("Fill all required fields");
    }
  }

  return (
    <div className="relative flex items-center justify-center">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="bg-white p-8 shadow-lg">
          {getCartArray.length > 0 ? (
            getCartArray.map((item) => (
              <div key={item.key} className="text-lg mb-4 flex flex-col sm:flex-row sm:justify-between items-center">
                <p className="text-center sm:text-left">{item.name} - ${item.price}</p>
                <div className="flex items-center mt-2 sm:mt-0">
                  <button
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l focus:outline-none hover:bg-gray-300 transition"
                    onClick={() => HandleQuantityDecrease(item.key)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r focus:outline-none hover:bg-gray-300 transition"
                    onClick={() => HandleQuantityIncrease(item.key)}
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.key)}
                    className="bg-red-500 text-white px-3 py-1 ml-4 rounded focus:outline-none hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg mb-4 text-center">Your cart is empty.</p>
          )}
          <p className="font-bold text-xl mt-4">Total: ${total}</p>
          <button className="mt-6 bg-purple-600 text-white font-bold py-2 px-6 rounded hover:bg-purple-700 transition" onClick={HandlePayment}>
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Responsive Form */}
      <div className="paymentForm hidden absolute w-full max-w-md md:max-w-lg lg:max-w-xl px-4 md:px-8 lg:px-12 mx-auto h-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className='flex items-center justify-between'>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Information</h2>
            <button onClick={ClosePaymentForm}><FaTimes /></button>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="example@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  name="expirationDate"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="123"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={PaymentSuccessful}
            >
              Submit Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
