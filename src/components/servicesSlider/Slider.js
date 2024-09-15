import React, { useState, useEffect } from 'react';
import './Slider.css';


import img1 from './../../images/servicesSlider/img5.webp';
import img2 from './../../images/servicesSlider/img4.webp';
import img3 from './../../images/servicesSlider/img3.webp';
import img4 from './../../images/servicesSlider/img2.webp';
import img5 from './../../images/servicesSlider/img1.webp';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
    ];

    const nextImg = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImg = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImg();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="slider-container">
            <div
                className="slider"
                style={{ backgroundImage: `url(${images[currentSlide]})` }}
            >
                <div className="arrow left-arrow" onClick={prevImg}>
                    &#10094;
                </div>
                <div className="arrow right-arrow" onClick={nextImg}>
                    &#10095;
                </div>
            </div>
        </div>
    );
};

export default Slider;
