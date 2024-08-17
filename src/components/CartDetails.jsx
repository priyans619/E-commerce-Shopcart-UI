import React from 'react';

const CartDetails = ({ totalItems, totalPrice }) => {
  const discount = 1000; 
  const deliveryCharge = 0; 
  const finalAmount = totalPrice - discount + deliveryCharge;

  return (
    <div className="border p-4 mb-4 shadow-xl lg:mx-64 md:mx-24 sm:mx-24 bg-white">
      <h2 className="text-xl text-gray-500 text-center font-semibold">Shopping Details</h2>
      <hr className="my-4" />
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <p>Price ({totalItems} items):</p>
          <p>₹{totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Discount:</p>
          <p className='text-green-600'>-₹{discount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charges:</p>
          <p className='text-green-600'>Free</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-medium py-1">
          <p>Total Amount:</p>
          <p>₹{finalAmount.toFixed(2)}</p>
        </div>
        <hr className="my-4" />
        <p className='font-medium text-center text-green-600'>You will save ₹1000 on this order</p>
      </div>
    </div>
  );
};

export default CartDetails;
