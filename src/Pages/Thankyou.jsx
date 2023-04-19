import React from 'react'
import "../Styles/thankyou.css" // import custom CSS file
import maga from "../assets/makingpizza.jpeg"
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <div className="text">
      <div
        className="thank-you-message"
        style={{ backgroundImage: `url(${maga})` }}
      >
        <p className="paragraph">
          Thank you your message has been saved! But we have reached the end
          form <br />{" "}
          
            <span className='sirfoy'>SIRFOY</span>
            
          
        </p>
        <Link to={"/"}>
          <button className="button">Go Home</button>
        </Link>
      </div>

      <div className="bottombg"></div>
    </div>
  );
}

export default Thankyou



// import React, { useState } from "react";

// function ThankYouPage() {
//   const [showMessage, setShowMessage] = useState(false);

//   function handleClick() {
//     setShowMessage(true);
//   }

//   return (
//     <div className="thank-you-page">
//       <button onClick={handleClick}>Click me</button>
//       {showMessage && (
//       
//       )}
//     </div>
//   );
//  }
