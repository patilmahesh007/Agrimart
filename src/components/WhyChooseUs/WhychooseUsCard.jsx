import React from 'react';
import './WhyChooseUsCard.css';

const WhyChooseUsCard = () => {
  return (
    <div className="why-choose-us-container">

      <div className="why-choose-us-content">
        <img src="https://cdn.shopify.com/s/files/1/0646/0568/3879/files/leaf.png?v=1719552788"
          alt="Leaf Icon"
          className="leaf-icon left" />

        <div className="why-choose-us-text">
          <h1 className='heading'>Why Choose Us ?</h1>
          <p>By building a culture of sustainability and wholesome living, we strive for a healthier you and a healthier planet.</p>
        </div>

        <img src="https://cdn.shopify.com/s/files/1/0646/0568/3879/files/leaf.png?v=1719552788"
          alt="Leaf Icon"
          className="leaf-icon right" />

      </div>
    </div>
  );
};

export default WhyChooseUsCard;