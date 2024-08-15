import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // addToCart functionality
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col bg-gray-200" style={{ background: 'linear-gradient( #DDEEED 100.17%, #FDF1E0 94.92%)' }}>
      <div className="flex-grow">
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4 rounded-lg bg-gray-200" />
        <h2 className="text-xl font-bold mb-2 h-12 overflow-hidden text-ellipsis whitespace-nowrap">{product.title}</h2>
        <p className="text-gray-700 mb-2">${product.price}</p>

      </div>
      <button onClick={handleAddToCart}
        className="bg-gray-500 text-gray-500 p-2 rounded mt-4"
        style={{ background: 'linear-gradient(239.26deg, #DDEEED 0.17%, #FDF1E0 0.92%)' }}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;