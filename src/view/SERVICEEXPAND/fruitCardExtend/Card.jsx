import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../../../config/shopCardData';
import VegCardData from '../../../config/VegCardData';
import DairyCardData from '../../../config/DairyCardData';
import ExoticsCardData from '../../../config/ExoticsCardData';
import EssentialsCardData from '../../../config/EssentialsCardData';
import './Card.css';
import WhyShopCard from "../../../components/whyshopcard/whyShopCard"
import Navbar from "../../../components/navbar/nav"
import Footer from "../../../components/footer/footer"
import TopBarSection from '../../../components/CartSection/CartSection';

function Card() {
  const cardsId = [...cardData,...DairyCardData,...VegCardData,...ExoticsCardData,...EssentialsCardData]
  let { cardId } = useParams();

  let cardObject = cardsId.find((card) => card.id == cardId);

  if (!cardObject) {
    return <div>Card not found</div>;
  }
  const [mainImage, setMainImage] = React.useState(cardObject.image);
  const handleMouseOver = (sliderImage) => {
    setMainImage(sliderImage);
  };

  return (

<div>
<Navbar/>
<TopBarSection/>

    <div className='card-page'>
      <div className='card-page-leftside'>
        <div className='card-page-leftside-div1'>
          <img src={mainImage} alt={cardObject.title} className='card-page-leftside-div1-img' />
          <div className="card-slider-div2">
            {cardObject.imageSlider.map((sliderImage, index) => (
              <img
                key={index}
                src={sliderImage}
                alt={`Slider ${index}`}
                onMouseOver={() => handleMouseOver(sliderImage)}
                onClick={() => handleMouseOver(sliderImage)}
              />
            ))}
          </div>
        </div>
        <hr/>
        <div className='card-page-leftside-div2'>
          <h1>Product Details</h1>
          <div className='card-page-leftside-div2-smallcard'>
            <b>Shelf Life</b>
            <span>{cardObject.shelfLife}</span>
          </div>
          <div className='card-page-leftside-div2-smallcard'>
            <b>Health Benefits</b>
            <span>{cardObject.healthBenefits}</span>
          </div>
          <div className='card-page-leftside-div2-smallcard'>
            <b>Storage Advice</b>
            <span>{cardObject.storageType} at {cardObject.storageTemperature}</span>
          </div>


          <div className='card-page-leftside-div2-smallcard'>
            <b>Farmer</b>
            <span>{cardObject.farmer}</span>
          </div>
          <div className='card-page-leftside-div2-smallcard'>
            <b>Marketed By</b>
            <span>{cardObject.marketedBy}</span>
          </div>
          <div className='card-page-leftside-div2-smallcard'>
            <b>Manufacturer Details</b>
            <span>{cardObject.manufacturer}</span>
          </div>
          <div className='card-page-leftside-div2-smallcard'>
            <b>FSSAI License</b>
            <span>{cardObject.sellerFSSAI}</span>
          </div>
          <div className='card-page-leftside-div2-smallcard'>
            <b>Disclaimer</b>
            <span>Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</span>
          </div>
          <div className='card-page-leftside-div2-smallcard'>
            <b>Return Policy</b>
            <span>The product is non-returnable. For a damaged, rotten or incorrect item, you can request a replacement within 48 hours of delivery.
              In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.</span>
          </div>
          <div className='card-page-leftside-div2-smallcard'>
            <b>Customer Care Details</b>
            <span>Email: info@agrimart.com</span>
          </div>

        </div>
      </div>
      <hr />
      <div className='card-page-rightside'> 
       <div className='card-page-rightside-div1'>
       <h1>{cardObject.title}</h1>
        <hr/>
       <span>{cardObject.quantity}</span>
<div>      <b>{cardObject.price}</b>  <h6>MRP<del> { cardObject.oldPrice}</del></h6></div>
       <h5>(Inclusive of all taxes)</h5>
       </div>
       <div className='card-page-rightside-div2'><WhyShopCard/></div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Card;
