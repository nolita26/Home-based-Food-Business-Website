// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";
import "/src/src.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
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
          <h1 className = "navbar-val"> Register </h1>
          <Button title = "Login" backgroundColor = {backgroundColor} />
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
            <h1 className = "reg-button"> Register </h1>
            <Button title = "Login" backgroundColor = {backgroundColor} />
          </div>
      </div>
    </div>
  );
};

export default Navbar;