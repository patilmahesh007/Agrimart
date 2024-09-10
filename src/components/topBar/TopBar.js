import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <>
            <div className="top-bar">
                <div className="left">
                    <span>LOG IN </span>
                    <span> JOIN </span>
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
