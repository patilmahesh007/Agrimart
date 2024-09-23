import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import brandIcon from '../../images/login-img/logo2.png';
import img3 from '../../images/login-img/image.png';
import './login.css'; 

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate(); 

 
  const saveLoginStatus = (status) => {
    setIsLogin(status);
    localStorage.setItem('isLogin', status);
  };

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    
    const users = JSON.parse(localStorage.getItem('users')) || [];


    const user = users.find(user => user.email === formData.email && user.password === formData.password);

    if (user) {
      
      toast.success('Login successful!', 2000);
      
      
      saveLoginStatus(true);

      
      localStorage.setItem('user', JSON.stringify({ firstName: user.firstName, lastName: user.lastName })); 

    
      navigate('/checkout');
    } else {
    
      toast.error('Invalid email or password!', 2000);
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
          <p className="login-welcome-text">Log in to access the best deals!<br />
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
               <p>Don't have an account? <Link to="/sign">Register here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default LoginForm;
