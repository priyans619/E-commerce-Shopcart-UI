import React from 'react';

const CartDetails = ({ totalItems, totalPrice }) => {
  const discount = 1000; 
  const deliveryCharge = 0; 
  const finalAmount = totalPrice - discount + deliveryCharge;

  return (
    <div className="border p-4 mb-4 shadow-xl lg:mx-64 md:mx-24 sm:mx-24 bg-white">
      <h2 className="text-xl text-gray-500 font-semibold">Price Details</h2>
      <hr className="my-4" />
      <div className="mt-4 space-y-2">
        <p>Price ({totalItems} items): ₹{totalPrice.toFixed(2)}</p>
        <p>Discount: -₹{discount.toFixed(2)}</p>
        <p>Delivery Charges: Free</p>
        <hr className="my-4" />
        <p className="text-lg font-medium py-1">Total Amount: ₹{finalAmount.toFixed(2)}</p>
        <hr className="my-4" />
        <p className='font-medium text-green-600'>You will save 1000 ₹ on this order</p>
      </div>
    </div>
  );
};

export default CartDetails;
