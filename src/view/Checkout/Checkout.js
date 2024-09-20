import React from 'react'
import './Checkout.css'
import Checkoutccard from '../../components/Checkoutcard/Checkoutcard'

function Checkout() {
  return (
     <div  className='main-container'>
      <div className='checkout-leftside'>
        <h1 className='contact-heading'>Contact</h1>
        <input type='text' className='checkout-email-input' style={{ width:500 }}placeholder='enter a email'/>
        <h1 className='contact-heading' >Delivery</h1>
        <input type='text' className='country-input'style={{ width:500 }} placeholder='country'/>
        <div className='fullname-container'>
           <input type='text' className='firstname-input' style={{ width:200 }} placeholder='Firstname'/>
           <input type='text' className='lastname-input'style={{ width:200 }} placeholder='Lastname'/>
        </div>
        <input type='text' className='Address-input'  style={{ width:500 }} placeholder='Address'/> <br></br>
        <input type='text' className='Apartment-input' style={{ width:500 }}  placeholder='Apartment'/>

        <div className='input-container-address'>
             <input type='text' className='inputs-all city-input' style={{ width:100 }}  placeholder='City'/>  
             <input type='text' className='inputs-all state-input' style={{ width:100 }}  placeholder='State'/>  
             <input type='text' className='inputs-all pincode-input' style={{ width:100 }}  placeholder='Pin code'/>
        </div>
        <input type='text' className='phonenumber-input' style={{ width:500 }}  placeholder='Phone Number'/>
      </div>
    
    
      <div className='checkout-rightside'>
               <h1>
                 <Checkoutccard 
                 
               
                 /> 
                 </h1>
      </div>
        

    </div>
  )
}

export default Checkout