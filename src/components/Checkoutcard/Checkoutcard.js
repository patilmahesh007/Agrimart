import React from 'react'
 import './Checkoutcard.css'
function Checkoutccard() {
  return (
    <div className='checkout-main-card-container'>
              <img className='checkboxcard-image' src='http://localhost:3000/static/media/cucumber.5321ab70722b6df18ba0.png'/>
              <div>
              <p className='checkout-title'> Potato</p>
              <p className='checkoutcard-kg'>500gms</p>
              </div>
             
              <h3>₹ 50</h3>
    </div>
  )
}

export default Checkoutccard