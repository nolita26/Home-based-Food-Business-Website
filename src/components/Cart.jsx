// eslint-disable-next-line no-unused-vars
import React from 'react';

const Cart = ({ cart, placeOrder }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5">
      <h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16">Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
