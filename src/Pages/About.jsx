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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dicta
          quia amet , nam, provident totam ipsum corrupti perferendis commodi
          saepe magnam eligendi impedit. Omnis corrupti placeat nesciunt iusto
          ratione ad consequuntur eveniet quaerat cumque sapiente et voluptatum
          fugit nulla nihil quibusdam sit delectus temporibus iure accusamus
          commodi, eaque ut amet! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quibusdam corporis ducimus, expedita architecto illo
          reiciendis odio excepturi animi, aut obcaecati amet repellendus
          deserunt vel cum saepe ab autem quasi, odit ad? Dolor neque nulla
          mollitia. Ad facere ipsa porro atque sint, impedit tempora aperiam ea
          sed ullam aspernatur voluptates illum esse dignissimos, delectus
          repellat recusandae quas. Reiciendis iusto, nam laudantium eos dolores
          unde esse officia minima odio provident accusamus eius suscipit
          dolorum sunt maiores impedit non! In beatae molestiae voluptates fugit
          dignissimos, vitae dolore sit eligendi nihil deserunt ipsam porro.
        </p>
      </div>
    </div>
  );
}

export default About