import React, { useState, useEffect } from 'react';
import './CardC.css';
import cardData from './../../config/shopCardData';
import DairyCardData from './../../config/DairyCardData';
import VegCardData from './../../config/VegCardData';
import ExoticsCardData from './../../config/ExoticsCardData';
import QuantityButton from '../BuynowButton/Buynow';
import EssentialsCardData from '../../config/EssentialsCardData';
import { Link } from 'react-router-dom';

function CardC({ CardOpen }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getStoredCartItems = () => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || {};
    return Object.values(storedCart);
  };

  useEffect(() => {
    const storedCartData = getStoredCartItems();
    const allCardData = [
      ...cardData,
      ...DairyCardData,
      ...VegCardData,
      ...ExoticsCardData,
      ...EssentialsCardData
    ];

    const cardInfos = storedCartData.map(item => {
      const card = allCardData.find(card => card.id === item.key);
      return card ? { ...card, quantity: item.quantity || 1 } : null;
    }).filter(card => card !== null);

    setCartItems(cardInfos);
  }, []);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => {

      const priceMatch = item.price.match(/₹([\d,]+)/);
      const price = priceMatch ? parseFloat(priceMatch[1].replace(',', '')) : 0;
      const quantity = parseFloat(item.quantity) || 1;
      return acc + price * quantity;
    }, 0);

    const formattedTotal = Number(total.toFixed(2));
    setTotalPrice(formattedTotal);
    localStorage.setItem('totalPrice', formattedTotal.toString());
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
                  <h5 className='CardC-card-quantity'>{cardInfo.quantity}</h5>
                  <p>{cardInfo.price} <del>{cardInfo.oldPrice}</del></p>
                </div>
                <div className="CardC-card-div3">
                  <QuantityButton
                    id={cardInfo.id}
                    name={cardInfo.title}
                    price={cardInfo.price}
                    oldprice={cardInfo.oldPrice}
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
              {localStorage.getItem('isLogin') === 'true' ? (
                <Link to={'/checkout'} className='checkout-btn'>Checkout {`>`}</Link>
              ) : (
                <Link to={'/login'} className='checkout-btn'>Login to Proceed  {`>`}</Link>
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
