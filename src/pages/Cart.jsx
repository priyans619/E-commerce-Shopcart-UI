import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const cartItemCount = cart.length; //CartCount
  const conversionRate = 82; //conversion rate from USD to INR

  return (
    <div className="container mx-auto mt-24">
      <h2 className="text-center mb-4">
        Your Cart ({cartItemCount})
      </h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="border p-4 mb-4 rounded-lg flex items-center shadow-md">
            <div className="flex-grow">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p>₹{(item.price * conversionRate).toFixed(2)}</p>
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className="bg-red-400 text-white py-1 px-2 rounded mt-2"
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
