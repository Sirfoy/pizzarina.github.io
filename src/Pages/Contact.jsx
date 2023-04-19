import React from "react";
import pizzaleft from "../assets/pizzaLeft.jpg";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${pizzaleft})` }}
      >
        hell
      </div>
      <div className="rightSide ">
        <h1>Contact us</h1>

        <form id="Contact-form" method="POST">
          <label htmlFor="name ">Fullname</label>
          <input
            name="name"
            type="text"
            placeholder="PLease enter Fullname..."
          />
          <label htmlFor="Email ">Email</label>
          <input
            name="Email"
            type="Email"
            placeholder="PLease enter Email..."
          />
          <label htmlFor="Message ">Message</label>
          <textarea rows={6} placeholder="Enter your message">
            
          </textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
