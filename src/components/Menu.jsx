// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../assets/img/dal-makhani.png";
import img2 from "../assets/img/palak-paneer.png";
import img3 from "../assets/img/dal-tadka.png";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  return (
    <div className = "menu-container">
      <h1 className = "menu-h1"> Most Popular Food </h1>

      <div className = "menu">
        <MenuCard img = {img1} title = "Dal Makhani"/>
        <MenuCard img = {img2} title = "Palak Paneer"/>
        <MenuCard img = {img3} title = "Dal Tadka"/>
      </div>
    </div>
  );
};

export default Menu;