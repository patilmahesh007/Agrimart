import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TopBar.css';
import CartSection from "./../../components/CartSection/CartSection";

const TopBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <CartSection />
      <nav className="menu">

        <Link className='menu-item'
          to="/essentials"
          style={isActive('/essentials') ? { color: ' rgba(38, 65, 52, 1)' } : { color: '#999999' }}>
          ESSENTIALS
        </Link>

        <Link className='menu-item'
          to="/vegetables"
          style={isActive('/vegetables') ? { color: ' rgba(38, 65, 52, 1)' } : { color: '#999999' }}>
          VEGETABLES
        </Link>

        <Link className='menu-item'
          to="/Fruits"
          style={isActive('/Fruits') ? { color: ' rgba(38, 65, 52, 1)' } : { color: '#999999' }}>
          FRUITS
        </Link>

        <Link className='menu-item'
          to="/exotics"
          style={isActive('/exotics') ? { color: ' rgba(38, 65, 52, 1)' } : { color: '#999999' }}>
          EXOTICS
        </Link>

        <Link className='menu-item'
          to="/dairy"
          style={isActive('/dairy') ? { color: ' rgba(38, 65, 52, 1)' } : { color: '#999999' }}>
          DAIRY
        </Link>

      </nav>
    </>
  );
};

export default TopBar;
