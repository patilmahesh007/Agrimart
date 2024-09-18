import React, { useState, useEffect } from 'react';
import './CardC.css';
import cardData from './../../config/shopCardData';
import DairyCardData from './../../config/DairyCardData';
import VegCardData from './../../config/VegCardData';
import ExoticsCardData from './../../config/ExoticsCardData';
import QuantityButton from '../BuynowButton/Buynow';
import { Link } from 'react-router-dom';

function CardC({ CardOpen }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getStoredCardIds = () => {
      const ids = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('cartItem-')) {
          const id = key.replace('cartItem-', '');
          ids.push(id);
        }
      }
      return ids;
    };

    const storedCardIds = getStoredCardIds();

    const storedCardData = storedCardIds.map(id => {
      const item = JSON.parse(localStorage.getItem(`cartItem-${id}`));
      return item ? { ...item, id } : null;
    }).filter(item => item !== null);

    const allCardData = [
      ...cardData,
      ...DairyCardData,
      ...VegCardData,
      ...ExoticsCardData
    ];

    const cardInfos = storedCardData.map(item => {
      return allCardData.find(card => card.id === item.key) || null;
    }).filter(card => card !== null);

    setCartItems(cardInfos);
  }, [cardData, DairyCardData, VegCardData, ExoticsCardData]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0);
      return updatedItems;
    });
  };

  return (
    <div className="CardC-body">
      <div className="CardC-body-blur"></div>

      <div className="CardC-container">
        <span className="CardC-header">
          <h2>My Cart</h2>
          <img
            src="https://img.icons8.com/?size=64&id=2i5n7zNvArOt&format=png"
            onClick={() => CardOpen()}
            alt="close icon"
          />
        </span>

        <div className="CardC-content">
          
          {cartItems.length > 0 ? (
            cartItems.map(cardInfo => (
              <div key={cardInfo.id} className="CardC-card">
             
                <div className="CardC-card-div1">   <img src={cardInfo.image} alt={cardInfo.title} className="CardC-img" />

                </div>
                <div className="CardC-card-div2">
                  <h1>{cardInfo.title}</h1>
                  <h5>{cardInfo.quantity}</h5>
                  <p>{cardInfo.price} <del>{cardInfo.oldPrice}</del></p>
                  
                </div>
<div className="CardC-card-div3"><QuantityButton id={cardInfo.id} name={cardInfo.title} onQuantityChange={handleQuantityChange} /></div>

              </div>
            ))
          ) : (
            <h1>Your cart is empty</h1>
       
      )}
      <div className="CardC-proceed-to-buy">
        
        <h1 className="CardC-proceed-to-buy-h1"><h3>total<br/>300</h3><Link to={'/login'}>Login to Proceed {`>`} </Link></h1></div>
       <span className='cardc-empty-container'>zxdfv</span>
        </div>
        <div>
         
        </div> 
      </div>
      
    </div>
  );
}

export default CardC;

