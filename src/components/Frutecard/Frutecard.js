import React, { useState } from 'react';
import cardData from '../../config/shopCardData';
import { Link } from 'react-router-dom';
import './Frutecard.css';

function FruitCard() { 
  const [Quantity, setQuantity] = useState(0);
  return (
    <>
    <div className="App-fruit">
      {cardData.map((card) => {
        return (
          <Link to={`/card/${card.id}`} key={card.id} className="card-link">
            <div className="card-body">
              <div className="card-body-div1">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-body-div2">
                <h3>{card.title}</h3>
                <p>Price: {card.price}</p>
                <del> {card.oldPrice}</del>

              </div>
            </div>
          </Link>
        );
      })}
              <div className='Buy-now-btn'> <img src='https://cdn-icons-png.flaticon.com/128/149/149163.png' onClick={() => setQuantity(Quantity + 1)} />Buy Now <img onClick={() => setQuantity(Quantity - 1)} src='https://cdn-icons-png.flaticon.com/128/3524/3524384.png'/></div>

    </div>
    </>
  );
}

export default FruitCard;
