import React from 'react'
import './Checkout.css'
function Checkout() {
  return (
    <div>
      <div>

        <hr/>
      </div>
      <div className='checkout-leftside'>
        <h1 className='contact-heading'>Contact</h1>
        <input type='text' className='email-input' placeholder='enter a email'/>
        <h1 className='contact-heading' >Delivery</h1>
        <input type='text' className='country-input' placeholder='country'/>
        <div className='fullname-container'>
           <input type='text' className='firstname-input' placeholder='country'/>
           <input type='text' className='lastname-input' placeholder='country'/>
        </div>
      </div>
      <div className='checkout-rightside'>
              
      </div>
    </div>
  )
}

export default Checkout