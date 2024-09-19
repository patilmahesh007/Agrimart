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
  const [totalPrice, setTotalPrice] = useState(0);

  const getStoredCardItems = () => {
    const ids = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('cartItem-')) {
        const id = key.replace('cartItem-', '');
        ids.push(id);
      }
    }
    return ids.map(id => {
      const item = JSON.parse(localStorage.getItem(`cartItem-${id}`));
      return item ? { ...item, id } : null;
    }).filter(item => item !== null);
  };

  useEffect(() => {
    const storedCardData = getStoredCardItems();
    const allCardData = [
      ...cardData,
      ...DairyCardData,
      ...VegCardData,
      ...ExoticsCardData
    ];

    const cardInfos = storedCardData.map(item => {
      const card = allCardData.find(card => card.id === item.id);
      return card ? { ...card, quantity: item.quantity || 1 } : null;
    }).filter(card => card !== null);

    setCartItems(cardInfos);
  }, []);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => {
      const price = parseFloat(item.price.replace('₹', '').replace(',', '')) || 0;
      const quantity = parseFloat(item.quantity) || 1;
      return acc + price * quantity;
    }, 0);
    setTotalPrice(Number(total.toFixed(2)));
  };

  useEffect(() => {
    calculateTotalPrice(cartItems);
  }, [cartItems]);

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
                <div className="CardC-card-div1">
                  <img src={cardInfo.image} alt={cardInfo.title} className="CardC-img" />
                </div>
                <div className="CardC-card-div2">
                  <h1>{cardInfo.title}</h1>
                  <h5>{cardInfo.quantity}</h5>
                  <p>{cardInfo.price} <del>{cardInfo.oldPrice}</del></p>
                </div>
                <div className="CardC-card-div3">
                  <QuantityButton
                    id={cardInfo.id}
                    name={cardInfo.title}
                    onQuantityChange={quantity => handleQuantityChange(cardInfo.id, quantity)}
                  />
                </div>
              </div>
            ))
          ) : (
            <h1>Your cart is empty</h1>
          )}
          <div className="CardC-proceed-to-buy">
            <h1 className="CardC-proceed-to-buy-h1">
              <h3>Total<br />₹{Number(totalPrice).toFixed(2)}</h3>
              {localStorage.getItem('islogin') === 'true' ? (
                <Link to={'/checkout'}>Checkout {`>`}</Link>
              ) : (
                <Link to={'/login'}>Login to Proceed {`>`}</Link>
              )}
            </h1>
          </div>
          <span className="cardc-empty-container"></span>
        </div>
      </div>
    </div>
  );
}

export default CardC;
