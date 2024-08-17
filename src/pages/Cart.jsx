import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import CartItem from '../components/CartItem';
import CartDetails from '../components/CartDetails';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // State for managing quantities of items in the cart
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  // Handle quantity change
  const handleQuantityChange = (index, delta) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + delta);
    setQuantities(newQuantities);
  };

  const totalItems = quantities.reduce((sum, qty) => sum + qty, 0);
  const totalPrice = cart.reduce((sum, item, index) => sum + item.price * 82 * quantities[index], 0);

  return (
    <div className="container mx-auto mt-24 lg:px-24 md:px-12 sm:px-4">
      <h2 className="text-center mb-4">
        Your Cart ({cart.length})
      </h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <CartItem
              key={item.id}
              item={item}
              quantity={quantities[index]}
              onQuantityChange={(delta) => handleQuantityChange(index, delta)}
              onRemove={() => dispatch(removeFromCart(item))}
            />
          ))}
          <CartDetails totalItems={totalItems} totalPrice={totalPrice} />
        </>
      )}
    </div>
  );
};

export default Cart;

