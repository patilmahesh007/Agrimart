import React, { useState } from 'react';
import './Checkout.css';
import PaymentButton from "./../../components/Payment/Payment";
import cardData from './../../config/shopCardData';
import ExoticsCardData from './../../config/ExoticsCardData';
import VegCardData from './../../config/VegCardData';
import DairyCardData from './../../config/DairyCardData';
import EssentialsCardData from './../../config/EssentialsCardData';

function Checkout() {
  const totalPrice = localStorage.getItem('totalPrice');
  const islogin = localStorage.getItem('isLogin');
  const [showPayment, setShowPayment] = useState(false);
  const billdata = JSON.parse(localStorage.getItem('cartItems')) || {};

  const allData = [
    ...cardData,
    ...DairyCardData,
    ...VegCardData,
    ...ExoticsCardData,
    ...EssentialsCardData
  ];

  const imageObject = allData.filter(item => item.id === billdata.key);

  const [formData, setFormData] = useState({
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true);
    localStorage.setItem('checkoutFormData', JSON.stringify(formData));

    setFormData({
      country: '',
      firstName: '',
      lastName: '',
      address: '',
      apartment: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
    });
  };

  // Helper function to extract price value as a number from string like "₹50/kg"
  const getPriceAsNumber = (priceStr) => {
    if (!priceStr) return 0; // Return 0 if priceStr is undefined or null
    const match = priceStr.match(/₹(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  return (
    islogin ? (
      <div className='checkout-container'>
        <div className='checkout-div1'>
          <hr />
          <h2>Delivery Details</h2>
          <form className='checkout-form' onSubmit={handleSubmit}>
            <select
              className='checkout-select'
              name='country'
              value={formData.country}
              onChange={handleChange}
            >
              <option value="" disabled>Select Country</option>
              <option value="India">India</option>
            </select>
            <div className='checkout-div1-box1'>
              <input
                type="text"
                name='firstName'
                placeholder='First name'
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name='lastName'
                placeholder='Last name'
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <input
                required
              type="text"
              name='address'
              placeholder='Address'
              className='checkout-address'
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
                required
              name='apartment'
              placeholder='Apartment, suite, etc.'
              className='checkout-apartment'
              value={formData.apartment}
              onChange={handleChange}
            />
            <div className='checkout-div1-box2'>
              <input
                required
                type="text"
                name='city'
                placeholder='City'
                value={formData.city}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name='state'
                placeholder='State'
                value={formData.state}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name='zipCode'
                placeholder='Zip code'
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
            <input
                required
              type="text"
              name='phoneNumber'
              placeholder='Phone number'
              className='checkout-phone'
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <button type="submit" className='checkout-submit-button'>Submit</button>
          </form>
          {showPayment ? (
            <PaymentButton
              price={totalPrice}
              name1={formData.firstName + ' ' + formData.lastName}
              email1={formData.email}
              contact1={formData.phoneNumber}
            />
          ) : (
            <h1> .</h1>
          )}
        </div>
        <hr />
        <div className='checkout-div2'>
        <div className='checkout-rightside-scrolldiv'>
          <div className='checkout-rightside-items'>
<h1>Item Name</h1><h1>Quantity</h1>   <h1>  Total Price</h1>
         </div>
        {Object.values(billdata).map((item) => {
            const pricePerUnit = getPriceAsNumber(item.price); 
            const totalItemPrice = pricePerUnit * item.quantity;  

            return (
              <div key={item.key} className='checkout-rightside-items'>
<p>{item.name}</p><p>{item.quantity}</p>   <p>  ₹{totalItemPrice}</p>

              
              </div>
            );
          })}  
               
        </div>
        <div className='checkout-rightside-items'>
<h1></h1><h1></h1>   <h1>  Total: ₹<u>{totalPrice}</u></h1>
         </div>

       
          
       
        </div>
      </div>
    ) : (
      <h1 className='checkout-redirect'>
        Redirecting to Login...{setInterval(() => {
          window.location.href = '/login';
        }, 2000)}
      </h1>
    )
  );
}

export default Checkout;
