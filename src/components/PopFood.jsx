// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Button from "../layouts/Button";

const PopFood = () => {

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
    setCart([...cart, item]);
  };

  return (
    <div className = "pop-container">
      <h1 className = "pop-h1"> Most Popular Food </h1>

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
      
    </div>
  );
};

export default PopFood;