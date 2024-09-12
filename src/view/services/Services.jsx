import React, { useState } from 'react';
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import './service.css';
import TopBar from './../../components/TopBar/TopBar';
import "../../view/cart/card.css";
import { PRODUCTS } from '../../config/carddata'; // Unused, remove or use it
import Vegcard from '../../components/vegcard/vegcard';

// importing category
import Essentials from './../../view/essentials/Essentials';
import Vegetables from './../../view/vegetables/Vegetables';
import Fruits from './../../view/fruits/Fruits';
import Exotics from './../../view/exotics/Exotics';
import Dairy from './../../view/dairy/Dairy';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('Essentials');

  const renderCards = () => {
    switch (selectedCategory) {
      case 'Essentials':
        return <Essentials />;

      case 'Vegetables':
        return <Vegetables />;

      case 'Fruits':
        return <Fruits />;

      case 'Exotics':
        return <Exotics />;

      case 'Dairy':
        return <Dairy />;
        
      default:
        return null;
    }
  };

  return (
    <div>
      <TopBar setSelectedCategory={setSelectedCategory} />
      <div className="cards-container">
        {renderCards()}
      </div>
      <Footer /> 
    </div>
  );
};

export default Services;
