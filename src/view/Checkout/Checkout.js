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
  const islogin = localStorage.getItem('islogin');
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
                type="text"
                name='lastName'
                placeholder='Last name'
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name='address'
              placeholder='Address'
              className='checkout-address'
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name='apartment'
              placeholder='Apartment, suite, etc.'
              className='checkout-apartment'
              value={formData.apartment}
              onChange={handleChange}
            />
            <div className='checkout-div1-box2'>
              <input
                type="text"
                name='city'
                placeholder='City'
                value={formData.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name='state'
                placeholder='State'
                value={formData.state}
                onChange={handleChange}
              />
              <input
                type="text"
                name='zipCode'
                placeholder='Zip code'
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name='phoneNumber'
              placeholder='Phone number'
              className='checkout-phone'
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <hr />
        <div className='checkout-div2'>
        <div className='checkout-rightside-scrolldiv'>
        {Object.values(billdata).map((item) => {
            const pricePerUnit = getPriceAsNumber(item.price); // Extracted price value
            const totalItemPrice = pricePerUnit * item.quantity; // Calculate total price for the item

            return (
              <div key={item.key} className='checkout-rightside-items'>
                <p className='checkout-rightside-name'>
                  {item.name}: <span>{item.quantity}</span>
                  <h4>{item.price}</h4>
                  <h4><del>{item.oldprice}</del></h4>
                </p>
                <div className='checkout-rightside-items2'>
                  ₹{totalItemPrice}
                </div>
              </div>
            );
          })}       
        </div>
        {showPayment ? (
            <PaymentButton
              price={totalPrice}
              name1={formData.firstName + ' ' + formData.lastName}
              email1={formData.email}
              contact1={formData.phoneNumber}
            />
          ) : (
            <h1>Enter data</h1>
          )}
          <span> <h3>Total: ₹{totalPrice}</h3>
           
          </span>
       
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
