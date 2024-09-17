import React from 'react';
import './TopBar.css';
import CartSection from "./../../components/CartSection/CartSection"

const TopBar = ({ setSelectedCategory }) => {
  return (
    <>
      
      <CartSection setSelectedCategory={setSelectedCategory} />

      <nav className="menu">
        <span onClick={() => setSelectedCategory('Essentials')}>ESSENTIALS</span>
        <span onClick={() => setSelectedCategory('Vegetables')}>VEGETABLES</span>
        <span onClick={() => setSelectedCategory('Fruits')}>FRUITS</span>
        <span onClick={() => setSelectedCategory('Exotics')}>EXOTICS</span>
        <span onClick={() => setSelectedCategory('Dairy')}>DAIRY</span>
      </nav>
    </>
  );
};

export default TopBar;


