import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // State for form submission
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-heading">Checkout Page</h2>

      {submitted ? (
        <div className="checkout-confirmation">
          <h3>Thank you for your purchase, {formData.name}!</h3>
          <p>We have sent a confirmation email to {formData.email}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Billing Information</h3>

          <div className="checkout-form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkout-form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkout-form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkout-form-row">
            <div className="checkout-form-group">
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="checkout-form-group">
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="checkout-form-group">
              <label>Zip:</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <h3>Payment Information</h3>

          <div className="checkout-form-group">
            <label>Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkout-form-row">
            <div className="checkout-form-group">
              <label>Expiry:</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
            </div>

            <div className="checkout-form-group">
              <label>CVV:</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="checkout-submit-btn">
            Complete Purchase
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
