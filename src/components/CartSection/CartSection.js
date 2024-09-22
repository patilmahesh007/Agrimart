import React, { useState } from 'react';
import './CartSection.css';
import CartComponent from '../CartComponent/CardC';
import { Link } from 'react-router-dom';
import CardC from '../CartComponent/CardC';
const TopBarSection = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
const [totalPrice1, setTotalPrice1] = useState(0);


  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <div className="topbar-container">
{
  isCartOpen ? <CartComponent  CardOpen={setIsCartOpen} /> : null
}      
      <div className="topbar-left">
      </div>

      <div className="right">
        
        <span className='price'></span>

        <span onClick={() => setIsCartOpen(!isCartOpen)}>
          <img src='https://cdn-icons-png.flaticon.com/128/3916/3916624.png'
            alt='cart icon'
            className='social-media-icon1' />
        </span>
      </div>

  
    </div>
  );
};

export default TopBarSection;
