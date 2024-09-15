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
      description: 'Pears are juicy and sweet, a healthy and delicious snack '
        + 'that you can enjoy anytime.',
    },
    {
      title: 'Grapes',
      imgSrc: grape,
      description: 'Grapes are small, round fruits that come in bunches. They '
        + 'are perfect for snacking or making wine.',
    },
    {
      title: 'Peach',
      imgSrc: peach,
      description: 'Peaches are soft and sweet with a fuzzy skin, commonly used '
        + 'in desserts, jams, and summer treats.',
    },
    {
      title: 'Apple',
      imgSrc: apple,
      description: 'Apples are crisp and refreshing, available in many varieties. '
        + 'They are used in a wide range of recipes.',
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
