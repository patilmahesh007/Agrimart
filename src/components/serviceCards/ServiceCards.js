import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCards.css';

import essentialsImage from './../../images/serviceCard/essentialsImage.webp';
import vegetablesImage from './../../images/serviceCard/vegetablesImage.jpg';
import exoticsImage from './../../images/serviceCard/exoticsImage.webp';
import fruitImage from './../../images/serviceCard/fruitImage.webp';
import dairyImage from './../../images/serviceCard/dairyImage.jpg';

const cardsData = [
    {
        title: 'Essentials',
        imageUrl: essentialsImage,
        path: '/essentials', 
    },

    {
        title: 'Vegetables',
        imageUrl: vegetablesImage,
        path: '/vegetables', 
    },

    {
        title: 'Exotics',
        imageUrl: exoticsImage,
        path: '/exotics', 
    },

    {
        title: 'Fruits',
        imageUrl: fruitImage,
        path: '/fruits',
    },

    {
        title: 'Dairy',
        imageUrl: dairyImage,
        path: '/dairy', 
    },

];

const ServiceCards = () => {
    return (
        <div className="cards-container">

            {cardsData.map((card, index) => (
                <Link to={card.path} className="card" key={index}>

                    <img src={card.imageUrl} alt={card.title} className="card-image" />
                    <div className="card-title-container">
                        <h2 className="card-title">{card.title}</h2>
                    </div>
                    
                </Link>
            ))}

        </div>
    );
};

export default ServiceCards;
