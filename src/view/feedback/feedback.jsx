import React, { useState, useEffect } from 'react';
import './feedback.css'
import  image  from "./feedback.jpg"

const RatingForm = () => {
  const [rating, setRating] = useState(null); // To store the selected rating
  const [feedback, setFeedback] = useState(''); // To store the feedback text
  const [name, setName] = useState(''); // To store user name (new state)
  const [email, setEmail] = useState(''); // To store user email (new state)

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

    // Save data to local storage
    localStorage.setItem('rating', rating);
    localStorage.setItem('feedback', feedback);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    console.log("Rating:", rating);
    console.log("Feedback:", feedback);
    console.log("Name:", name);
    console.log("Email:", email);

    setRating(null);
    setFeedback('');
    setName('');
    setEmail('');

  };

  return (
    <div className='feedback-container'>
        <img src={image} className='feedback-image'/>
      <div className="rating-container">
        <b>feedback</b><hr/>
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

        <div className="feedback-section">
          <label htmlFor="feedback">Tell us more</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            rows="4"
            placeholder="Your feedback here"
          ></textarea>
        </div>
        <div>
          <div className="rating-user-info">
            <input type="text" placeholder="Enter Your Name" className='feedback-input' value={name} onChange={handleNameChange} />
          </div>
          <div>
            <input type="email" placeholder="Enter Your email" className='feedback-input' value={email} onChange={handleEmailChange} />
          </div>
        </div>
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default RatingForm;
