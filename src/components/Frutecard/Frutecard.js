import React, { useState } from 'react';
import cardData from '../../config/shopCardData';
import { Link } from 'react-router-dom';
import './Frutecard.css';
import QuantityButton from '../BuynowButton/Buynow';

function FruitCard() { 
  const [Quantity, setQuantity] = useState(0);
  

  return (
    <div className="App-fruit">
      {cardData.map((card) => {
        return (
          <div className="card-body" key={card.id}>
            <Link to={`/card/${card.id}`} className="card-link">
              <div className="card-body-div1">
                <img src={card.image} alt={card.title} className='fruit-card-img' />
              </div>
              <div className="card-body-div2">
                <h3>{card.title}</h3>
                <p>{card.price}</p>
                <del>{card.oldPrice}</del>
              </div>
            </Link>
            <span className="buynow-btn">
              <QuantityButton id={card.id} name={card.title} />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default FruitCard;
