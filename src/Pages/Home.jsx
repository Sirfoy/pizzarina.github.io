import React from 'react'
import { Link } from 'react-router-dom'
import  BannerImage  from '../assets/pizza.jpeg'
import style from '../Styles/Home.css'
const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Sirfoys pizza</h1>
        <p>One Bite changes Alot</p>
        <Link to="/menu">
          <button>Order now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home