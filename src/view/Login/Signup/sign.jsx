import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../../../components/footer/footer';
import { Link } from 'react-router-dom';
import brandIcon from '../img/logo2.png';
import img3 from '../img/image.png';
import './sign.css';
const LoginForm = () => {

};
return (
  <>
    <header className="header-container-1">
      <nav className="nav-bar-1">
      <Link to="/sign" className="nav-link-1 active">Registration</Link>
        <Link to="/login" className="nav-link-1">Login</Link>
      </nav>
    </header>

    <div className="form-container-1">
      <div className="welcome-section-1">
        <img src={img3} alt="User" className="user-img" /><br />
        <h2>Welcome</h2>
        <p>Harvest the Best Deals – Register and Start Shopping with <img src={brandIcon} alt="brand logo" className="brand-logo" /></p>
      </div>
      <div className="registration-section-1">
        <div className="form-box-1">
          <h2> Registration Form</h2>
          <form onSubmit={handleRegister}>
            <div className="input-group-1">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <div className="input-group-2">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={handleChange}
                required
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={handleChange}
                required
              />
              <label htmlFor="female">Female</label>
            </div>
            <input
              type="text"
              name="age"
              placeholder="Enter Your Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className="register-btn-1">Register</button>
            <div className='login-register-section-1'>
            <p>Do not have an account? <Link to="/login">Login here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>

    <Toaster />
    <Footer />
  </>
);
};