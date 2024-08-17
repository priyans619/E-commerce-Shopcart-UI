import React from 'react';

const CartDetails = ({ totalItems, totalPrice }) => {
  const discount = 1000; 
  const deliveryCharge = 0; 
  const finalAmount = totalPrice - discount + deliveryCharge;

  return (
    <div className="border p-4 mb-4 rounded-lg shadow-xl">
      <h2 className="text-xl font-semibold">Cart Summary</h2>
      <div className="mt-4">
        <p>Price ({totalItems} items): ₹{totalPrice.toFixed(2)}</p>
        <p>Discount: -₹{discount.toFixed(2)}</p>
        <p>Delivery Charges: Free</p>
        <hr className="my-4" />
        <p className="text-lg font-bold">Total Amount: ₹{finalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartDetails;
