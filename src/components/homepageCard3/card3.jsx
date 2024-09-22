import React from 'react';
import { Link } from 'react-router-dom';
import './card3.css';
function Card3card({ image, description ,Link1}) {
  return (
    
        <div className='App-section-3'>
        <div className='App-section-3-div1'>
          <span>
            <h2>Fresh Food</h2>
            <p>Healthy Food</p>
            <h3>Get special discount on <br />{description}</h3>
          <Link to={Link1} className='knowmore-button-22'><div> Know More</div></Link>
          </span>
        </div>
        <div className='App-section-3-div2'>
          <img src={image} />

        </div>
      </div>
  );
}

export default Card3card;