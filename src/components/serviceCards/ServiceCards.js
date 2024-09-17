import React from 'react';
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
    },

    {
        title: 'Vegetables',
        imageUrl: vegetablesImage,
    },

    {
        title: 'Exotics',
        imageUrl: exoticsImage,
    },

    {
        title: 'Fruits',
        imageUrl: fruitImage,
    },

    {
        title: 'Dairy',
        imageUrl: dairyImage,
    },

];

const ServiceCards = ({ setSelectedCategory }) => {

    return (
        <div className="cards-container">

            {cardsData.map((card, index) => (
                <div className="card" key={index} onClick={() => setSelectedCategory(card.title)}>

                    <img src={card.imageUrl} alt={card.title} className="card-image" />

                    <div className="card-title-container">

                        <h2 className="card-title">{card.title}</h2>

                    </div>
                    
                </div>
            ))}

        </div>
    );
};

export default ServiceCards;
