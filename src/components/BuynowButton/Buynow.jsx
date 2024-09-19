import React, { useState, useEffect } from 'react';
import './Buynow.css';

const QuantityButton = ({ id, name }) => {
  const [quantity, setQuantity] = useState(() => {
    const storedItem = localStorage.getItem(`cartItem-${id}`);
    return storedItem ? JSON.parse(storedItem).quantity : 0;
  });

  useEffect(() => {
    if (quantity > 0) {
      const cartItem = { key: id, name, quantity };
      localStorage.setItem(`cartItem-${id}`, JSON.stringify(cartItem));
    } else {
      localStorage.removeItem(`cartItem-${id}`);
    }
  }, [quantity, id, name]);

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
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', border: '1px solid gray', borderRadius: '5px', padding: '5px 10px' }}>
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
