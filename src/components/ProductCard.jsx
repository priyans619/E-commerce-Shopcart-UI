import React from 'react';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col bg-gray-200" style={{ background: 'linear-gradient( #DDEEED 100.17%, #FDF1E0 94.92%)' }}>
      <div className="flex-grow">
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4 rounded-lg bg-gray-200" />
        <h2 className="text-xl font-bold mb-2 h-12 overflow-hidden text-ellipsis whitespace-nowrap">{product.title}</h2>
        <p className="text-gray-700 mb-2">${product.price}</p>
        
      </div>
    </div>
  );
};