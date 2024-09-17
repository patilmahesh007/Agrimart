import React, { useState } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState('Service');

  const renderPage = () => {
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

      case 'Cart':
        return <Cart />;

      default:
        return null;
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
        
        {selectedCategory === 'Service' && (
          <>
            <Slider />

            <ServiceCards setSelectedCategory={setSelectedCategory} />

            <div className="services-section">
              <h2>Our Services</h2>
              <div className="services-grid">
                <div className="service-card">
                  <h3>Essentials</h3>
                  <p>We provide essential farming tools and services for crop cultivation.</p>
                </div>

                <div className="service-card">
                  <h3>Vegetables</h3>
                  <p>Specialized support for vegetable farming to maximize yield.</p>
                </div>

                <div className="service-card">
                  <h3>Fruits</h3>
                  <p>Fruit farming consultancy and assistance for better harvests.</p>
                </div>

                <div className="service-card">
                  <h3>Exotics</h3>
                  <p>We offer unique services for exotic plant cultivation.</p>
                </div>

                <div className="service-card">
                  <h3>Dairy</h3>
                  <p>Dairy farming solutions for milk production and animal care.</p>
                </div>
              </div>
            </div>
          </>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Services;

