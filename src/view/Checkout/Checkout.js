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
        <input type='text' className='checkout-email-input' style={{ width:500 }}placeholder='enter a email'/>
        <h1 className='contact-heading' >Delivery</h1>
        <input type='text' className='country-input'style={{ width:500 }} placeholder='country'/>
        <div className='fullname-container'>
           <input type='text' className='firstname-input' style={{ width:200 }} placeholder='Firstname'/>
           <input type='text' className='lastname-input'style={{ width:200 }} placeholder='Lastname'/>
        </div>
        <input type='text' className='Address-input'  style={{ width:500 }} placeholder='Address'/>
        <input type='text' className='Apartment-input' style={{ width:500 }}  placeholder='Apartment'/>

        <div className='input-container-address'>
             <input type='text' className='city-input' placeholder='City'/>  
             <input type='text' className='state-input' placeholder='State'/>  
             <input type='text' className='pincode-input' placeholder='Pin code'/>
        </div>
        <input type='text' className='phonenumber-input' placeholder='Phone Number'/>
      </div>
      <div className='checkout-rightside'>
              
      </div>
    </div>
  )
}

export default Checkout