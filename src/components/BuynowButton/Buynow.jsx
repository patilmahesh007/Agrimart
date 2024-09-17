import React, { useState } from 'react';
import './Buynow.css';

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(1);
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity === 1) {
      setQuantity(0);
    } else {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div>
      {quantity === 0 ? (
        <button onClick={handleAdd} className='buynow-button-component'>Buy Now</button>
      ) : (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center',border: '1px solid gray', borderRadius: '5px',     padding: '5px 10px',}}>
          <button onClick={handleDecrease} style={{ background: 'none', border: 'none' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/149/149163.png"
              alt="Minus"
              style={{ width: '20px', height: '20px' }}
            />
          </button>
          <span  className='buynow-button-quantity' >{quantity}</span>
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
