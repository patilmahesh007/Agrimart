import React from 'react';
import DairyCardData from '../../config/DairyCardData';
import { Link } from 'react-router-dom';
import './../Frutecard/Frutecard.css';

function DairyCard() {
  return (
    <div className="App-fruit">
      {DairyCardData.map((card) => {
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
    </div>
  );
}

export default DairyCard;
