import React from 'react';
import './ServiceCards.css';

import essentialsImage from './../../images/serviceCard/essentialsImage.webp';
import vegetablesImage from './../../images/serviceCard/vegetablesImage.jpg';
import exoticsImage from './../../images/serviceCard/exoticsImage.webp';
import fruitImage from './../../images/serviceCard/fruitImage.webp';
import dairyImage from './../../images/serviceCard/dairyImage.jpg';

const cardsData = [
  {
    title: 'ESSENTIALS',
    imageUrl: essentialsImage, // Using imported image
  },
  {
    title: 'VEGETABLES',
    imageUrl: vegetablesImage, // Using imported image
  },
  {
    title: 'EXOTICS',
    imageUrl: exoticsImage, // Using imported image
  },
  {
    title: 'FRUIT',
    imageUrl: fruitImage, // Using imported image
  },
  {
    title: 'DAIRY',
    imageUrl: dairyImage, // Using imported image
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