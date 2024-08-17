import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const CartItem = ({ item, quantity, onQuantityChange, onRemove }) => {
  const conversionRate = 82; // Conversion USD to INR

  return (
    <div className="border p-4 mb-4 flex items-center bg-white">
      <div className="flex-grow ml-2">
        <img src={item.thumbnail} alt={item.title} className="bg-gray-200 w-24 h-24 object-cover rounded" />
        <div className="flex items-center mt-4">
          <button onClick={() => onQuantityChange(-1)} className="bg-blue-100 hover:bg-blue-300 rounded-full p-1">
            <AiOutlineMinus />
          </button>
          <span className="mx-2 border border-gray-300 px-4 rounded">{quantity}</span>
          <button onClick={() => onQuantityChange(1)} className="bg-blue-100 hover:bg-blue-300 rounded-full p-1">
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end ml-4">
        <h3 className="text-xl font-normal">{item.title}</h3>
        <p className='font-bold mt-2'>₹{(item.price * conversionRate * quantity).toFixed(2)}</p>
        <button onClick={onRemove} className="border shadow-md border-b-gray-500 bg-blue-100 hover:bg-blue-300 py-1 px-2 rounded mt-12">
          Remove item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
