// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../assets/img/contact.jpg";
import Button from "../layouts/Button";

const Contact = () => {

  const backgroundColor = `bg-brightColor`;

  return (
    <div className = "contact-container">
      <div className = "contact-content">
        <form className = "contact-form">
          <h1 className = "contact-h1"> Contact Form </h1>
          <div className = "details">
            <label htmlFor = "userName"> Full Name </label>
            <input className = "inputs" type = "text" name = "userName" id = "userName" placeholder = "Enter your name"/>
          </div>
          <div className = "details">
            <label htmlFor = "userEmail"> Email </label>
            <input className = "inputs" type = "email" name = "userEmail" id = "userEmail" placeholder = "Enter your email"/>
          </div>
          <div className = "details">
            <label htmlFor = "userMessage"> Message </label>
            <textarea className = "inputs" name = "userMessage" id = "userMessage" cols = "30" rows = "3" placeholder = "Enter your message"></textarea>
          </div>
          <div className = "submit">
            <Button title = "Submit" backgroundColor = {backgroundColor} />
          </div>
        </form>
        <div className = "contact-img">
          <img className = "rounded-lg" src={img} alt="" />
          <p className = "contact-p"> We would love to hear from you! Feel free to reach out for an queries or feedback and we will be in touch shortly! </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;