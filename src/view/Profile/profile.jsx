import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Userimg from '../../images/login-img/user-profile.png';
import { Link } from 'react-router-dom';
import Homeicon from '../../images/login-img/home.png';
import './profile.css';

const ProfileUser = () => {
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    oldPassword: '',
    newPassword: '',
  });

  useEffect(() => {
  
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setFormData({
        ...formData,
        username: `${storedUser.firstName} ${storedUser.lastName}`,
        email: storedUser.email,
      });
    } else {
     
      toast.error('Please log in first!',2000);
      window.location.href = '/login';
    }
  }, []);

  const handleLogout = () => {
   
    localStorage.removeItem('user');
    localStorage.removeItem('isLogin');
    toast.success('Logged out successfully!',2000);
    window.location.href = '/';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    
    
    const updatedUser = {
      firstName: formData.username.split(' ')[0],
      lastName: formData.username.split(' ')[1],
      email: formData.email,
    };
    
   
    localStorage.setItem('user', JSON.stringify(updatedUser));
    toast.success('Profile updated successfully!');
    setShowForm(false);
    setUser(updatedUser); 
  };

  return (
    <>
     <div className='profile-home-icon'>
          <Link to="/">
          <img src={Homeicon} className='Home-icon'/>
          </Link>
        </div>
      <div className="profile-user-container">
     
        <div className="profile-user-header">
          <img src={Userimg} alt="User Icon" className="profile-user-icon" />
          <h2>{user.firstName} {user.lastName}</h2>
          <div className="profile-user-buttons">
            <button className="profile-user-btn profile-update-btn" onClick={() => setShowForm(!showForm)}>
              Update Profile
            </button>
            <button className="profile-user-btn profile-logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        {showForm && (
          <div className="profile-update-form">
            <h3>Update Profile</h3>
            <form onSubmit={handleUpdateProfile}>
              <div className="update-form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="update-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="update-form-group">
                <label htmlFor="oldPassword">Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="update-form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button className="profile-user-btn profile-update-btn" type="submit">
                Update Profile
              </button>
            </form>
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
};

export default ProfileUser;
