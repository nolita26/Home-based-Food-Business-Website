// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../layouts/Button";
import img from "../assets/img/home.png";
import { Link } from "react-scroll";

const Home = () => {
  const backgroundColor = `bg-brightColor`;

  return (
    <div className = "home-container">
      <div className = "home-content">
        <h1 className = "home-h1"> Find your favourite Desi Home-Made Cuisines here! </h1>
        <p> From Dal Makhani to Palak Paneer, DK Cooks provides some garam, and finger-licking Indian Home-Made Food! </p>
        <div className = "lg:pl-24">
          <Link to = "menu" spy = {true} smooth = {true} duration = {500} >
            <Button title = "View Menu" backgroundColor = {backgroundColor} />
          </Link>
        </div>
      </div>
      <div className = "home-img">
        <img src = {img} alt = "img" />
      </div>
    </div>
  );
};

export default Home;