import React from "react";
import pizzaleft from "../assets/pizzaLeft.jpg";
import "../Styles/Contact.css";
import { Link } from "react-router-dom";

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
          <textarea rows={6} placeholder="Enter your message"></textarea>
          <Link to="/thankyou">
            <button type="submit">Send message</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Contact;
