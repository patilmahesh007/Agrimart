import React from 'react';
import './whyShopCard.css';
import basket from "./../../images/fruitcard/basket.png"
import farmer from "./../../images/fruitcard/farmer.png"
import delivery from "./../../images/fruitcard/delivery.png"
const cardData = [
  {
    id: 1,
    image:delivery,
    title: 'Superfast Delivery',
    description: 'Experience lightning-fast delivery that brings your favorite products straight to your doorstep in record time!'
  },
  {
    id: 2,
    image: basket,
    title: 'Wide Assortment',
    description: 'Discover a diverse range of products to meet all your needs and preferences!'
  },
  {
    id: 3,
    image: farmer,
    title: 'Fresh & Organic',
    description: 'Enjoy farm-fresh, organic produce directly sourced from trusted farmers!'
  }
];

function WhyShopCard() {
  return (
  <>

    <h2 className='card-why-shop-heading'>Why shop from Agrimart?</h2>
        <div className='card-why-shop'>
      {cardData.map((card) => (
        <div key={card.id} className='card-why-shop-container'>
          <div className='card-why-shop-div1'>
            <img src={card.image} alt={card.title} />
          </div>
          <div className='card-why-shop-div2'>
            <span>{card.title}</span>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div></>

  );
}

export default WhyShopCard;
