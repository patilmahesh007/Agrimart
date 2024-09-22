import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import brandIcon from '../../../images/login-img/logo2.png';
import img3 from '../../../images/login-img/image.png';
import './sign.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      
    });
  };

  
  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
     
      let users = JSON.parse(localStorage.getItem('users')) || [];

     
      const newUser = {
        username: `${formData.firstName} ${formData.lastName}`, 
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };

     
      users.push(newUser);

      
      localStorage.setItem('users', JSON.stringify(users));

      toast.success('Account created successfully!',2000);
   window.location.href = '/login';

 
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      toast.error('Passwords do not match!',2000);
    }
  };

  return (
    <>
      <div className="signup-register-container">
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
              <h2>Registration Form</h2>
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
      </div>

      <Toaster />
   
    </>
  );
};

export default SignupForm;
