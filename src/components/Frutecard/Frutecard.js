import React, { useState } from 'react';
import cardData from '../../config/shopCardData';
import { Link } from 'react-router-dom';
import './Frutecard.css';
import QuantityButton from '../BuynowButton/Buynow';


function FruitCard() { 
  const [Quantity, setQuantity] = useState(0);
  return (
    
    <div className='veg-continer-bg'>
      <div className=' frute-img-bg'>
      <img src={img} className='veg-img-bg'/></div>
      <div className='info'>
      <h3>{title}</h3>
      
      
      <b> Price: {prise}</b> </div>
      <div className='btn-continer'>
      <button className='card-btn'> More</button>
      </div>
    </div>
   

    </>
  );
}

export default FruitCard;
