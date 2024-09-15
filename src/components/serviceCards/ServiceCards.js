import React from 'react';
import './ServiceCards.css';

import essentialsImage from '../../images/serviceCards/essentialsImage.webp';
import vegetablesImage from './../../images/serviceCards/vegetablesImage.jpg';
import exoticsImage from './../../images/serviceCards/exoticsImage.webp';
import fruitImage from './../../images/serviceCards/fruitImage.webp';
import dairyImage from './../../images/serviceCards/dairyImage.jpg';

const cardsData = [
  {
    title: 'ESSENTIALS',
    imageUrl: essentialsImage, 
  },
  {
    title: 'VEGETABLES',
    imageUrl: vegetablesImage, 
  },
  {
    title: 'EXOTICS',
    imageUrl: exoticsImage, 
  },
  {
    title: 'FRUIT',
    imageUrl: fruitImage, 
  },
  {
    title: 'DAIRY',
    imageUrl: dairyImage, 
  },
];

const Cards = () => {
  return (
    <div className="cards-container">

      {cardsData.map((card, index) => (
        <div className="card" key={index}>

          <img src={card.imageUrl} alt={card.title} className="card-image" />

          <div className="card-title-container">
            <h2 className="card-title">{card.title}</h2>
          </div>

        </div>

      ))}
    </div>

  );
};

export default Cards;