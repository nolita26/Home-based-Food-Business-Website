// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../layouts/Button";

const MenuCard = ( props ) => {

  const backgroundColor = `bg-brightColor`;

  return (
    <div className = "menucard">
      <img className = "rounded-t-lg" src = {props.img} alt = "img" width = {500} height = {500} />
      <div className = "menucard-1">
        <h2 className = "menucard-t"> {props.title} </h2>
        <div className = "submit">
          <Button onSave = "abc" title = "Order Now" backgroundColor = {backgroundColor} /> 
        </div>
      </div>
    </div>
  );
};

export default MenuCard;