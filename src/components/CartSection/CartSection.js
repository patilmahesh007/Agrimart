import React, { useState } from 'react';
import './CartSection.css';
import CartComponent from '../CartComponent/CardC';
const TopBarSection = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <div className="topbar-container">
{
  isCartOpen ? <CartComponent  CardOpen={setIsCartOpen} /> : null
}      
      <div className="topbar-left">
        <span>LOG IN</span>
        <span>JOIN</span>
      </div>

      <div className="topbar-right">
        <span className="topbar-price">RS. 0.00</span>
        <span>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3916/3916624.png"
            alt="cart icon"
            className="topbar-cart-icon"
            onClick={toggleCart}
          />
        </span>
      </div>

      {/* Cart Menu */}
      <div className={`topbar-cart-menu ${isCartOpen ? 'topbar-cart-menu-open' : ''}`}>
        <p>Your cart is empty</p>
      </div>
    </div>
  );
};

export default TopBarSection;
