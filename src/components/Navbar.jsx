// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import "/src/src.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState([]);

  const handleChange = () => {
    setMenu(!menu);
  };

  // const handleAddToCart = (item) => {
  //   setCart([...cart, item]);
  // };

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const AddToCart = () => {
    <ul>
          {cart.map((item) => (
            <li className = "remove" key = { item.id }>
              { item.name } - ${ item.price.toFixed(2) }
                <Button onClick={ () => handleRemoveFromCart(item.id) } title = "Remove" backgroundColor = {backgroundColor} /> 
            </li>
          ))}
        </ul>
  };

  const backgroundColor = `bg-white`;

  return (
    <div>
      <div className = "navbar">
        <div className = "head">
          <Link to = "/" spy = {true} smooth = {true} duration = {500}>
            <h1 className = "heading"> DK Cooks </h1>
          </Link>
        </div>
        <nav className="navbar-content lg:flex">
          <Link to = "home" spy = {true} smooth = {true} duration = {500} className = "navbar-val"> Home </Link>
          <Link to = "order" spy = {true} smooth = {true} duration = {500} className = "navbar-val"> Order </Link>
          <Link to = "menu" spy = {true} smooth = {true} duration = {500} className = "navbar-val"> Menu </Link>
          <Link to = "contact" spy = {true} smooth = {true} duration = {500} className = "navbar-val"> Contact </Link>
        </nav>
        <div className = "navbar-content lg:flex">
          <Link to = "register" spy = {true} smooth = {true} duration = {500} className = "log-button"> Register</Link >
          <Link to = "login" spy = {true} smooth = {true} duration = {500} className = "log-button"> Login </Link>
            {/* <Button title = "Login" backgroundColor = {backgroundColor} onClick = {() => {'login'}} /> */}
        </div>
        <div className = "outline-menu lg:flex" onClick = {AddToCart} >
          <AiOutlineShoppingCart size = {30} />
        </div>
        <div className = "lg:hidden outline-menu" onClick = {handleChange} >
          <AiOutlineMenu size = {25} />
        </div>
      </div>
      <div className = {` ${ menu ? "translate-x-0" : "-translate-x-full"} lg:hidden navbar-2`}>
        <Link to = "home" spy = {true} smooth = {true} duration = {500} className = "navbar-val"> Home </Link>
        <Link to = "order" spy = {true} smooth = {true} duration = {500} className = "navbar-val"> Order </Link>
        <Link to = "menu" spy = {true} smooth = {true} duration = {500} className = "navbar-val"> Menu </Link>
        <Link to = "contact" spy = {true} smooth = {true} duration = {500} className = "navbar-val"> Contact </Link>
          <div className = "reg-log">
            {/* <Link to = "register" spy = {true} smooth = {true} duration = {500}>
              <h1 className = "reg-button"> Register </h1>
              <Button title = "Login" backgroundColor = {backgroundColor} />
            </Link> */}
            <Link to = "register" spy = {true} smooth = {true} duration = {500} className = "reg-button"> Register</Link >
            <Link to = "login" spy = {true} smooth = {true} duration = {500} className = "reg-button"> Login </Link>
          </div>
      </div>
    </div>
  );
};

export default Navbar;