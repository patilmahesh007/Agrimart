import React from 'react';
import EssentialsCardData from '../../config/EssentialsCardData';
import { Link } from 'react-router-dom';
import './../Frutecard/Frutecard.css';
import QuantityButton from '../BuynowButton/Buynow';


function Esscard() {

  return (
    <>
    <div className="App-fruit">
      {EssentialsCardData.map((card) => {
        return (
        
            <div className="card-body">
                  <Link to={`/card/${card.id}`} key={card.id} className="card-link">
              <div className="card-body-div1">
                <img src={card.image} alt={card.title} className='fruit-card-img' />
              </div>
              
          
              <div className="card-body-div2">
                <h3 >{card.title}</h3>
                <p > {card.price}</p>
                <del> {card.oldPrice}</del>
              </div>
          </Link>
          <span className="buynow-btn"><QuantityButton id={card.id} name={card.title} /></span>


           </div>
         
        );
      })} 

    </div>
   

    </>
  );
}

export default Esscard;
