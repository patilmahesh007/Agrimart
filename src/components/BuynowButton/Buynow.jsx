import React, { useState, useEffect } from 'react';
import './Buynow.css';

const QuantityButton = ({ id, name, price, oldprice }) => {
  const [quantity, setQuantity] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || {};
    return storedCart[id] ? storedCart[id].quantity : 0;
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || {};

    if (quantity > 0) {
      const updatedCartItem = { key: id, name, quantity, price, oldprice };
      storedCart[id] = updatedCartItem;
    } else {
      delete storedCart[id]; 
    }

    localStorage.setItem('cartItems', JSON.stringify(storedCart)); 
  }, [quantity, id, name, price, oldprice]);

  const handleAdd = () => setQuantity(1);

  const handleIncrease = () => {
    if (quantity < 10) setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity === 1 ? 0 : prevQuantity - 1));
  };

  return (
    <div>
      {quantity === 0 ? (
        <button onClick={handleAdd} className="buynow-button-component">Buy Now</button>
      ) : (
        <div className='quantity-btn-container'>
          <button onClick={handleDecrease} style={{ background: 'none', border: 'none' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/149/149163.png"
              alt="Minus"
              style={{ width: '20px', height: '20px' }}
            />
          </button>
          <span className="buynow-button-quantity">{quantity}</span>
          <button onClick={handleIncrease} style={{ background: 'none', border: 'none' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3524/3524384.png"
              alt="Plus"
              style={{ width: '20px', height: '20px' }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default QuantityButton;
