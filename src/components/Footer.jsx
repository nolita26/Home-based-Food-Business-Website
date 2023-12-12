// eslint-disable-next-line no-unused-vars
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className = "footer">
      <div className = "footer-container">
        <div>
          <h1 className = "footer-h1"> Follow Us </h1>
          <nav className = "footer-nav">
            <BsFacebook size = {25} className = "navbar-val:hover"/>
            <BsInstagram size = {25} className = "navbar-val:hover"/>
          </nav>
        </div>
      </div>
      <div>
        <p className = "copy"> @Copyright 2023 <span className = "text-brightColor"> DK Cooks </span> | All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;