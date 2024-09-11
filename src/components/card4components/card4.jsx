import React from 'react';
import './card4.css';
import pear from './../../images/card3/pear.png';
import grape from './../../images/card3/grape.png';
import peach from './../../images/card3/peach.png';
import apple from './../../images/card3/apple.png';

function FruitsCard({ title, imgSrc, description }) {
  return (
    <div className="fruits-card">
      <h2>{title}</h2>
      <img src={imgSrc} alt={title} />
      <p>{description}</p>
    </div>
  );
}

export default function FruitsCards() {
  const fruitsData = [
    {
      title: 'Pear',
      imgSrc: pear,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius.',
    },
    {
      title: 'Grapes',
      imgSrc: grape,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    },
    {
      title: 'Peach',
      imgSrc: peach,
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.',
    },
    {
      title: 'Apple',
      imgSrc: apple,
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.',
    },
  ];

  return (
    <div className="fruits-cards-container">
      {fruitsData.map((fruit, index) => (
        <FruitsCard key={index} {...fruit} />
      ))}
    </div>
  );
}
