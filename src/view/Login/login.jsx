import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Footer from "../../components/footer/footer";
import { Link } from 'react-router-dom';
import brandIcon from './img/logo2.png';
import img3 from './img/image.png';
import './login.css'; // Updated CSS file for login form

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail && storedPassword) {
      if (formData.email === storedEmail && formData.password === storedPassword) {
        toast.success('Login successful!');
      } else {
        toast.error('Invalid email or password!');
      }
    } else {
      toast.error('No account found. Please sign up first.');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      toast.info(`Password reset link sent to: ${storedEmail}`);
    } else {
      toast.error('No email found. Please sign up first.');
    }
  };

  return (
    <>
      <header className="login-header">
        <nav className="login-nav-bar">
          <Link to="/login" className="login-nav-link active">Login</Link>
          <Link to="/sign" className="login-nav-link">Registration</Link>
        </nav>
      </header>

      <div className="login-form-container">
        <div className="login-welcome-section">
          <img src={img3} alt="User" className="login-user-img" /><br />
          <h2>Welcome Back</h2>
          <p>Log in to access the best deals!<br />
            <img src={brandIcon} alt="Brand Logo" className="login-brand-logo" />
          </p>
        </div>
        <div className="login-form-section">
          <div className="login-form-box">
            <h2>User Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
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
              <button type="submit" className="login-btn">Login</button>
              <div className='login-register-section-2'>
                <p>Do not have an account? <Link to="/sign">Register here</Link></p>
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

export default LoginForm;
