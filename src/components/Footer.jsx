import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsappIcon from "@material-ui/icons/WhatsApp";
import  '../Styles/Footer.css'


const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia ">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <WhatsappIcon />
      </div>
      <p>&copy; 2023 sirfoy's concept </p>
    </div>
  );
}

export default Footer