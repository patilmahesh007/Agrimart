import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import IMG from "./img/bg.svg";
import img from "./img/avatar.svg";
import { Link } from "react-router-dom";
import "./login.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
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

   
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

 
    if (storedUsername && storedPassword) {
      if (formData.username === storedUsername && formData.password === storedPassword) {
        toast.success('Login successful!');
       
      } else {
        toast.error('Invalid username or password!');
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
    <div>
        <div><Navbar/></div>
        <div className="login-container">
        <div className="login-img">
          <img src={IMG} alt="Background" />
        </div>
        <div className="login-content">
          <form onSubmit={handleLogin}>
            <img src={img} alt="Avatar" />
            <h2 className="title-1">Welcome</h2>

            <div className="input-div2">
              <div className="login-icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="login-input-name">
                <h5>Username</h5>
                <input
                  type="text"
                  className="input-1"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-div2">
              <div className="login-icon">
                <i className="fas fa-lock"></i>
              </div>
              <div className="login-input-name">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input-1"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <input type="submit" className="login-btn" value="Login" />
            <div className="login-text">
              <span>Not have an account?</span>
              <Link to="/sign">Sign up</Link>
            </div>
          </form>
        </div>

      
        <Toaster />
      </div>
        <div><Footer/></div>
    </div>
  )
}

export default LoginForm