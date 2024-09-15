import React from 'react';
import './ServiceCards.css';

<<<<<<< HEAD
import essentialsImage from '../../images/serviceCards/essentialsImage.webp';
import vegetablesImage from './../../images/serviceCards/vegetablesImage.jpg';
import exoticsImage from './../../images/serviceCards/exoticsImage.webp';
import fruitImage from './../../images/serviceCards/fruitImage.webp';
import dairyImage from './../../images/serviceCards/dairyImage.jpg';
=======
import essentialsImage from './../../images/serviceCard/essentialsImage.webp';
import vegetablesImage from './../../images/serviceCard/vegetablesImage.jpg';
import exoticsImage from './../../images/serviceCard/exoticsImage.webp';
import fruitImage from './../../images/serviceCard/fruitImage.webp';
import dairyImage from './../../images/serviceCard/dairyImage.jpg';
>>>>>>> 811c30d5330d9671764d9766d340b70429237897

const cardsData = [
  {
    title: 'ESSENTIALS',
<<<<<<< HEAD
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
=======
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
>>>>>>> 811c30d5330d9671764d9766d340b70429237897
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

<<<<<<< HEAD
export default Cards;
=======
export default Cards;
>>>>>>> 811c30d5330d9671764d9766d340b70429237897
