import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './feedback.css';
import image from "./feedbackimages/rating.png";
import logo from "./feedbackimages/logo.png";

const RatingForm = () => {
  const [rating, setRating] = useState(null); // To store the selected rating
  const [feedback, setFeedback] = useState(''); // To store the feedback text
  const [name, setName] = useState(''); // To store user name
  const [email, setEmail] = useState(''); // To store user email

  // Load data from local storage on component mount
  useEffect(() => {
    const storedRating = localStorage.getItem('rating');
    const storedFeedback = localStorage.getItem('feedback');
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');

    setRating(storedRating ? parseInt(storedRating) : null);
    setFeedback(storedFeedback || '');
    setName(storedName || '');
    setEmail(storedEmail || '');
  }, []);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if rating, name, and email fields are not empty
    if (rating === null) {
      toast.error('Rating is required.');
      return;
    }
    if (!name) {
      toast.error('Name is required.');
      return;
    }
    if (!email) {
      toast.error('Email is required.');
      return;
    }

    // Save data to local storage
    localStorage.setItem('rating', rating);
    localStorage.setItem('feedback', feedback);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    toast.success('Thanks for your feedback!');

    console.log("Rating:", rating);
    console.log("Feedback:", feedback);
    console.log("Name:", name);
    console.log("Email:", email);

    // Clear the form
    setRating(null);
    setFeedback('');
    setName('');
    setEmail('');
  };

  return (
    <>
      <header className="feedback-header"></header>
      <div className='feedback-main-box'>
        <div className='feedback-container'>
          <div className="feedback-welcome-section">
            <img src={image} alt="User" className="feedback-user-img" /><br />
            <h2>Welcome to feedback page</h2>
            <p>Support Local Farmers !<br />
              <img src={logo} alt="Brand Logo" className="feedback-brand-logo" />
            </p>
          </div>

          <div className="rating-container">
            <h2>How would you rate us?</h2>
            <p>Pick a rate <span className="required">*</span></p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${rating >= star ? 'selected' : ''}`}
                  onClick={() => handleRatingClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="rating-labels">
              <span>Poor</span>
              <span>Excellent</span>
            </div>
            <form>
              <div className="feedback-section">
                <label className='textarea-label'>Tell us more</label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  rows="4"
                  placeholder="Your feedback here"
                />
              </div>
              <div>
                <div className="rating-user-info">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div className="rating-user-info">
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
              </div>

              <button onClick={handleSubmit} className="submit-button">
                Submit
              </button>
            </form>
          </div>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default RatingForm;


