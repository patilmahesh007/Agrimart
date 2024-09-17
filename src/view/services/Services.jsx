import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import './service.css';
import TopBar from './../../components/TopBar/TopBar';

import Essentials from './../../view/essentials/Essentials';
import Vegetables from './../../view/vegetables/Vegetables';
import Fruits from './../../view/fruits/Fruits';
import Exotics from './../../view/exotics/Exotics';
import Dairy from './../../view/dairy/Dairy';


import Slider from '../../components/servicesSlider/Slider';
import ServiceCards from './../../components/serviceCards/ServiceCards';

const Services = () => {
  
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const path = location.pathname.split('/')[2];
    return path || 'Service';
  });

  const renderPage = () => {
    switch (selectedCategory) {
      case 'essentials':
        return <Essentials />;

      case 'vegetables':
        return <Vegetables />;

      case 'fruits':
        return <Fruits />;

      case 'exotics':
        return <Exotics />;

      case 'dairy':
        return <Dairy />;

      default:
        return (
          <>
            <Slider />
            <ServiceCards />
          </>
        );
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <TopBar setSelectedCategory={setSelectedCategory} />
        <div className="cards-container">
          
          {renderPage()}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;


