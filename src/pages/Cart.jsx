import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // for managing quantities of items in the cart
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  // Handle quantity change
  const handleQuantityChange = (index, delta) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + delta);
    setQuantities(newQuantities);
  };

  const cartItemCount = cart.length; //CartCount
  const conversionRate = 82; //conversion USD to INR

  return (
    <div className="container mx-auto mt-24 lg:px-24 md:px-12 sm:px-4">
      <h2 className="text-center mb-4">
        Your Cart ({cartItemCount})
      </h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={item.id} className="border p-4 mb-4 rounded-lg flex items-center shadow-md">
            <div className="flex-grow ">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p>₹{(item.price * conversionRate * quantities[index]).toFixed(2)}</p>
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className="bg-red-400 text-white py-1 px-2 rounded mt-2"
              >
                Remove item
              </button>
            </div>
            <div className="flex flex-col items-center ml-4">
              <img src={item.thumbnail} alt={item.title} className="bg-gray-200 w-24 h-24 object-cover rounded" />
              <div className="flex items-center mt-4">
                <button
                  onClick={() => handleQuantityChange(index, -1)}
                  className="bg-gray-300 rounded-full p-1"
                >
                  <AiOutlineMinus />
                </button>
                <span className="mx-2 border border-gray-300 px-5 rounded">{quantities[index]}</span>
                <button
                  onClick={() => handleQuantityChange(index, 1)}
                  className="bg-gray-300 rounded-full p-1"
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
