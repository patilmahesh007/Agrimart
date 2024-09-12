import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';


import Dairy from './../../view/dairy/Dairy';
import Essentials from './../../view/essentials/Essentials';
import Fruits from './../../view/fruits/Fruits';
import Exotics from './../../view/exotics/Exotics';
import Vegetables from './../../view/vegetables/Vegetables';

const TopBar = () => {
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
        <Link to="/Essentials">ESSENTIALS</Link>
        <Link to="/Vegetables">VEGETABLES</Link>
        <Link to="/Fruits">FRUITS</Link>
        <Link to="/Exotics">EXOTICS</Link>
        <Link to="/Dairy">DAIRY</Link>
      </nav>


    </>
  );
};

export default TopBar;
