// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../assets/img/dal-makhani.png";
import img2 from "../assets/img/palak-paneer.png";
import img3 from "../assets/img/dal-tadka.png";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5">
      <h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16">Most Popular Food</h1>

      <div className=" flex flex-col lg:flex-row gap-5 mt-14">
        <MenuCard img={img1} title="Dal Makhani"/>
        <MenuCard img={img2} title="Palak Paneer"/>
        <MenuCard img={img3} title="Dal Tadka"/>
      </div>
    </div>
  );
};

export default Menu;