import React from 'react';
import './TopBar.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';






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
                <span>ESSENTIALS</span>
                <span>VEGETABLES</span>
                <span>FRUITS</span>
                <span>EXOTICS</span>
                <span>DAIRY</span>
            </nav>


        </>
    );
};

export default TopBar;