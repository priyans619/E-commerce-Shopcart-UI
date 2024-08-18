import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const conversionRate = 82; // Conversion rate from USD to INR
  const [isAdded, setIsAdded] = useState(cart.some(item => item.id === product.id));
  const [showSparkle, setShowSparkle] = useState(false);

  // addToCart functionality
  const handleAddToCart = () => {
    if (!isAdded) {
      dispatch(addToCart(product));
      setIsAdded(true);
      setShowSparkle(true); //sparkle show
    }
  };

  return (
    <div className="rounded-sm p-5 bg-white border shadow-md mb-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col relative">
      <div className="flex-grow">
        <img src={product.thumbnail} alt={product.title} className="w-full h-56 object-cover mb-4 rounded-md bg-slate-100" />
        <h2 className="text-xl h-8 overflow-hidden text-ellipsis whitespace-nowrap">{product.title}</h2>
        <p className="text-gray-700 font-bold">₹{(product.price * conversionRate).toFixed(2)}</p> {/* Price in INR */}
      </div>
      <button
        onClick={handleAddToCart}
        className={`bg-slate-100 hover:bg-blue-300 text-gray-500 text-xl p-1 rounded mt-4 relative ${showSparkle ? 'sparkle' : ''}`}
      >
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
      {showSparkle && (
        <div className="sparkle-container">
          <FaStar className="sparkle-icon" />
          <FaStar className="sparkle-icon" />
          <FaStar className="sparkle-icon" />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
