import React from 'react';
import VegCardData from '../../config/VegCardData';
import { Link } from 'react-router-dom';
import './../Frutecard/Frutecard.css';

function Vegcard() {
  return (
    <div className="App-fruit">
      {VegCardData.map((card) => {
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

export default Vegcard;
