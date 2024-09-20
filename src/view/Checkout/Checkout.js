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
]


const imageObject=allData.find(item => item.id === billdata.key)
console.log(imageObject)

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

  return   (
    islogin?
    <div className='checkout-container'>
      <div className='checkout-div1'>
        <hr/>
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
            {/* Add more countries as needed */}
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
          <button type="submit" >Submit</button>
        </form>
      </div>
      <hr />
      <div className='checkout-div2'>
        
      {Object.values(billdata).map((item) => (
            <div  key={item.key} className='checkout-rightside-items'> 
              <p className='checkout-rightside-name'>{item.name+":"}

                <span>{" "+item.quantity+" "}</span>
              </p>
             <p>{item.price}</p>
              <p>{item.oldprice}</p>
              {/* <img src={imageObject.image} alt={imageObject.altText}/> */}
              <h1>{imageObject||"mahesh"}</h1>
              
            </div>
          ))}






       {showPayment? <PaymentButton
          price={totalPrice}
          name1={formData.firstName + ' ' + formData.lastName}
          email1={formData.email}
          contact1={formData.phoneNumber} /> :<h1>enter data</h1> }
      </div>
    </div>:<h1 className='checkout-redirect' >Redirecting to Login...{
       setInterval(() => {
         window.location.href = '/login'
       },2000)
    } </h1>
  );
}

export default Checkout;
