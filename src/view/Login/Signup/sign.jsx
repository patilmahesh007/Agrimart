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

  return (
    <>
        <div><Navbar/></div>
        <div className="signup-container">
        <div className="img">
          <img src={IMG} alt="Background" />
        </div>
        <div className="login-content">
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
        </div>
        </div>
        <div><Footer/></div>
        
    </>
  )
}

export default SignupForm 