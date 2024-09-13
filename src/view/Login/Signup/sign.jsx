import React, { useState } from 'react';
import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/nav";
import IMG from "./img/bg.svg";


const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    localStorage.setItem("username", formData.username);
    localStorage.setItem("password", formData.password);
    localStorage.setItem("email", formData.email);

    toast.success("Account created successfully!");
    setFormData({
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <>
        <div><Navbar/></div>
        <div className="signup-container">
        <div className="img">
          <img src={IMG} alt="Background" />
        </div>
        <div className="signup-content">
          <form onSubmit={handleSubmit}/>
            <img src={img} alt="Avatar" />
            <h3 className="title">Create Account</h3>

            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  className="input"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="div">
                <h5>Email</h5>
                <input
                  type="email"
                  className="input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            
        </div>
        </div>
        <div><Footer/></div>
        
    </>
  )
}

export default SignupForm 