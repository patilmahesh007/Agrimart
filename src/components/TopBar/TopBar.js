import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';
import CartSection from "./../../components/CartSection/CartSection";

const TopBar = () => {
  return (
    <>
      <CartSection />
      <nav className="menu">
        <Link to="/essentials" className='menu-item'>ESSENTIALS</Link>
        <Link to="/vegetables" className='menu-item'>VEGETABLES</Link>
        <Link to="/Fruits" className='menu-item'>FRUITS</Link>
        <Link to="/exotics" className='menu-item'>EXOTICS</Link>
        <Link to="/dairy" className='menu-item'>DAIRY</Link>
      </nav>
    </>
  );
};

export default TopBar;
