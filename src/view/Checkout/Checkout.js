import React, { useState, useEffect } from 'react';
import './Checkout.css';
import PaymentButton from "./../../components/Payment/Payment";
import Navbar from "./../../components/navbar/nav";
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate(); 
  const totalPrice = localStorage.getItem('totalPrice');
  const islogin = localStorage.getItem('isLogin');
  const [showPayment, setShowPayment] = useState(false);
  const billdata = JSON.parse(localStorage.getItem('cartItems')) || {};



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

  const [expandedSection, setExpandedSection] = useState('deliveryDetails');

  useEffect(() => {
    if (!islogin) {
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  }, [islogin, navigate]); 

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
  };

  const getPriceAsNumber = (priceStr) => {
    if (!priceStr) return 0;
    const match = priceStr.match(/₹(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  return (
    islogin ? (
      <>
      <Navbar/>
      <div className='checkout-container'>
        <div className='checkout-div1'>
          <div className={`collapsible-section ${expandedSection === 'deliveryDetails' ? 'active' : ''}`}>
            <div
              className="collapsible-header"
              onClick={() => toggleSection('deliveryDetails')}
            >
              Delivery Details {expandedSection === 'deliveryDetails' ? '-' : '+'}
            </div>
            <div className="collapsible-content">
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
                <button type="submit" className='checkout-submit-button'  onClick={() => toggleSection('paymentOptions')}>Submit</button>
              </form>
            </div>
          </div>

          <div className={`collapsible-section ${expandedSection === 'orderSummary' ? 'active' : ''}`} id='orderSummary-section'>
            <div
              className="collapsible-header"
              onClick={() => toggleSection('orderSummary')}
            >
              Order Summary {expandedSection === 'orderSummary' ? '-' : '+'}
            </div>
            <div className="collapsible-content">
              <div className='checkout-rightside-items'>
                <h1>Item Name</h1>
                <h1>Quantity</h1>
                <h1>Total Price</h1>
              </div>
              {Object.values(billdata).map((item) => {
                const pricePerUnit = getPriceAsNumber(item.price);
                const totalItemPrice = pricePerUnit * item.quantity;
                return (
                  <div key={item.key} className='checkout-rightside-items'>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <p>₹{totalItemPrice}</p>
                  </div>
                );
              })}
              <div className='checkout-rightside-items'>
                <h1></h1>
                <h1></h1>
                <h1>Total: ₹<u>{totalPrice}</u></h1>
              </div>
            </div>
          </div>

          <div className={`collapsible-section ${expandedSection === 'paymentOptions' ? 'active' : ''}`}>
            <div
              className="collapsible-header"
              onClick={() => toggleSection('paymentOptions')}
            >
              Payment Options {expandedSection === 'paymentOptions' ? '-' : '+'}
            </div>
            <div className="collapsible-content">
              <span>
                <div>
                  {showPayment ? (
                    <PaymentButton
                      price={totalPrice}
                      name1={formData.firstName + ' ' + formData.lastName}
                      email1={formData.email}
                      contact1={formData.phoneNumber}
                    />
                  ) : (
                    <h1>Please fill out the form to proceed to payment.</h1>
                  )}
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className='checkout-div2'>
          <h2>PRICE DETAILS</h2>
          <hr />
          <h2>Price ({Object.values(billdata).length} items): <span>₹{totalPrice}</span></h2>
          <h2>Delivery Charges: <span><del>₹40</del> ₹0</span></h2>
          <h2>Packaging: <span><del>₹120</del> ₹0</span></h2>
          <hr />
          <h2>Total Payable: <span>₹{totalPrice}</span></h2>
        </div>
      </div></>
    ) : (
      <h1 className='checkout-redirect'>
        Redirecting to Login...
      </h1>
    )
  );
}

export default Checkout;
