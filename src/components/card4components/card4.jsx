import React from 'react';
import './FruitsCard.css';

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
      title: 'Apple',
      imgSrc: './assests/apple.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius.',
    },
    {
      title: 'Grapes',
      imgSrc: './assests/grapes.png',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    },
    {
      title: 'Cheries',
      imgSrc: './assests/cherries.png',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.',
    },
    {
      title: 'Pineapple',
      imgSrc: './assests/pineapple.png',
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
