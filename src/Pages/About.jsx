import React from 'react'
import multiplepizza from '../assets/multiplePizzas.jpeg'
import '../Styles/About.css'

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop "
        style={{ backgroundImage: `url(${multiplepizza})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US </h1>

        <p>
          Welcome to Sirfoy's Pizza, the best pizzeria in town! Our mission is
          to bring you delicious, fresh, and authentic pizza made with the
          finest ingredients. We are a family-owned business run by Sirfoy and
          his team of expert pizza makers. At Sirfoy's Pizza, we believe that
          great pizza starts with great ingredients. That's why we use only the
          freshest and highest quality ingredients in all of our pizzas. From
          our homemade dough to our signature sauce and premium toppings, every
          bite of Sirfoy's Pizza is a flavor explosion. Our menu features a
          variety of pizzas to suit all tastes, from classic pepperoni and
          cheese to gourmet pies like the BBQ chicken and bacon pizza. We also
          offer a range of sides and desserts to complement your meal. We take
          pride in providing our customers with exceptional service and a
          welcoming atmosphere. Whether you're dining in or ordering for
          delivery, our friendly staff will ensure that your experience at
          Sirfoy's Pizza is a memorable one. Thank you for choosing Sirfoy's
          Pizza for your next pizza craving. We look forward to serving you
          soon!
        </p>
      </div>
    </div>
  );
}

export default About