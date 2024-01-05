// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Button from "../layouts/Button";

const Menu = () => {

  const backgroundColor = `bg-brightColor`;
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, img: './src/assets/img/dal-tadka.png', name: 'Dal Tadka',  price: 10.99 },
    { id: 2, img: './src/assets/img/dal-makhani.png', name: 'Dal Makhani', price: 8.99 },
    { id: 3, img: './src/assets/img/palak-paneer.png', name: 'Palak Paneer', price: 8.99 },
    { id: 4, img: './src/assets/img/palak-paneer.png', name: 'Palak Paneer', price: 8.99 },
    // Add more menu items as needed
  ];

  const handleAddToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      // If item already exists in the cart, update the quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If item doesn't exist, add it to the cart
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    // setCart([...cart, item]);
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div className = "pop-container">
      <h1 className = "pop-h1"> Food Menu </h1>
      
      <div className = "pop-food">
        {menuItems.map((item) => (
          <div key = {item.id} className = "foodcard">
            <img className = "rounded-t-lg" src = {item.img} alt = {`Item ${item.id}`} width = {400} height = {300} />
            <div className = "foodcard-1">
              <h2 className = "foodcard-t"> {item.name} </h2>
              <p className = "text-center"> ${item.price.toFixed(2)} </p>
              <div className = "submit">
                <Button onClick = {() => handleAddToCart(item)} title = "Add to Cart" backgroundColor = {backgroundColor} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className = "pop-container">
        <h1 className = "pop-h1"> Shopping Cart </h1>
        <ul>
          {cart.map((item) => (
            <li className = "remove" key = { item.id }>
              { item.name } - ${ item.price.toFixed(2) } - Quantity: {item.quantity }
                <Button onClick={ () => handleRemoveFromCart(item.id) } title = "Remove" backgroundColor = {backgroundColor} /> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;