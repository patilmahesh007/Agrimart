import React from 'react';
import './TopBar.css';

const TopBar = ({ setSelectedCategory }) => {
  return (
    <>
      <div className="top-bar">
        <div className="left">
          <span>LOG IN </span>
          <span> JOIN </span>
        </div>

        <div className="right">
          <div className="social-icons">
            <a href='https://www.facebook.com' target='blank'>
              <img src='https://cdn-icons-png.flaticon.com/128/6422/6422199.png'
                alt='facebook icon'
                className='social-media-icon' />
            </a>
            <a href='https://www.instagram.com/' target='blank'>
              <img src='https://cdn-icons-png.flaticon.com/128/6422/6422200.png'
                alt='instagram icon'
                className='social-media-icon' />
            </a>
          </div>
          <span className='price'>RS. 0.00</span>
          <span>
            <img src='https://cdn-icons-png.flaticon.com/128/3916/3916624.png'
              alt='cart icon'
              className='social-media-icon' />
          </span>
        </div>
      </div>


      <nav className="menu top-bar">

        <span onClick={() =>
          setSelectedCategory('Essentials')}>ESSENTIALS
        </span>
        <span onClick={() =>
          setSelectedCategory('Vegetables')}>VEGETABLES
        </span>
        <span onClick={() =>
          setSelectedCategory('Fruits')}>FRUITS
        </span>

        <span onClick={() =>
          setSelectedCategory('Exotics')}>EXOTICS
        </span>
        <span onClick={() =>
          setSelectedCategory('Dairy')}>DAIRY
        </span>
        
      </nav>
    </>
  );
};

export default TopBar;
