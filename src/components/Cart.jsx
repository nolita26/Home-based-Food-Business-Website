// eslint-disable-next-line no-unused-vars
import React from 'react';

const Cart = ({ cart }) => {

  return (
    <div className = "pop-container">
      <h1 className = "pop-h1"> Cart </h1>
      <ul>
        { cart.map((item) => (
          <li key = { item.id } >
            { item.name } - ${ item.price.toFixed(2) }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
