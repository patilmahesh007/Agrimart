import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import IMG from "../img/bg.svg";
import img from "../img/avatar.svg";
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

        </div>
        <Footer/>
    </div>
  )
}

export default LoginForm