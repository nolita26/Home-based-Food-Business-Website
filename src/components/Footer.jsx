// eslint-disable-next-line no-unused-vars
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-darkBackground text-white">
      <div className="flex flex-col md:flex-row justify-center p-8 md:px-32 px-5">
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Follow Us</h1>
          <nav className=" flex flex-row md:items-center justify-center gap-3">
            <BsFacebook size={25} className="hover:text-brightColor transition-all cursor-pointer"/>
            <BsInstagram size={25} className=" hover:text-brightColor transition-all cursor-pointer"/>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">@Copyright 2023 <span className=" text-brightColor">DK Cooks</span> | All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;