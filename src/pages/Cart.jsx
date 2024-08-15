import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="border p-4 mb-4 rounded-lg flex items-center">
          <div className="flex-grow">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p>${item.price}</p>
            <button
              onClick={() => dispatch(removeFromCart(item))}
              className="bg-red-600 text-white py-1 px-2 rounded mt-2"
            >
              Remove item
            </button>
          </div>
          <img src={item.thumbnail} alt={item.title} className="bg-gray-200 w-32 h-32 object-cover rounded ml-4" />
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;