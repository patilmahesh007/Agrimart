import React from 'react';
import { Appcard1data } from "./../../config/config"
import './card1.css'
function Section1() {
  return (
    <div className="App-section-1">
      <div className='App-section-1-div1'><span>Agrimart Farm Fresh Products</span></div>
      <div className='App-section-1-div2'>
        <h3>Fresh agri products bring the goodness of nature straight to your table, ensuring quality, nutrition, and flavor in every bite</h3>
        <p>Our website connects you directly with local farmers, offering a range of farm-fresh organic products delivered straight to your door. We ensure quality, sustainability,
          and fair pricing.</p>
        <div className='App-section-1-images-container'>
          {Appcard1data.map((item, index) => (
            <span key={index}>
              <img className="App-section-1-images" src={item.image} alt={item.altText} />
              <p>{item.text1} <br /> {item.text2}</p>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Section1;
