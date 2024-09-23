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
  const navigate = useNavigate();  // Use this hook to redirect

  // Function to save login status to localStorage
  const saveLoginStatus = (status) => {
    setIsLogin(status);
    localStorage.setItem('isLogin', status);
  };

  // Handle input changes and update the formData state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch users from localStorage (if any)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if there is a matching user with the same email and password
    const user = users.find(user => user.email === formData.email && user.password === formData.password);

    if (user) {
      // If the user is found, show success message
      toast.success('Login successful!', 2000);
      
      // Set isLogin to true and store in localStorage
      saveLoginStatus(true);

      // Store user details in localStorage (e.g., firstName, lastName)
      localStorage.setItem('user', JSON.stringify({ firstName: user.firstName, lastName: user.lastName })); 

      // Navigate to checkout or another page
      navigate('/checkout');
    } else {
      // If no user is found, show error
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
