import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const conversionRate = 82; //conversion rate from USD to INR

  // addToCart functionality
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="rounded-lg p-1 border shadow-md mb-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col ">
      <div className="flex-grow">
        <img src={product.thumbnail} alt={product.title} className="w-full h-56 object-cover mb-4 rounded-lg bg-gray-100" />
        <h2 className="text-xl h-8 overflow-hidden text-ellipsis whitespace-nowrap">{product.title}</h2>
        <p className="text-gray-700 font-bold">₹{(product.price * conversionRate).toFixed(2)}</p> {/* Price in INR */}
      </div>
      <button onClick={handleAddToCart}
        className="bg-gray-200 text-gray-500 text-xl p-2 rounded mt-4"
        >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
