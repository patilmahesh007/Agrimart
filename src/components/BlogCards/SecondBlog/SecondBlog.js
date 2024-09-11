import React from 'react'
import "./SecondBlog.css";

function SecondBlog({ id, imgUrl, title, description, details }) {
  return (
    <div className="second-blog-container">
      <img src={imgUrl} className="second-blog-image" alt={title} />
      <div className="second-blog-content">
        <h4 className="second-blog-title">{title}</h4>
        <hr />
        <span className="second-blog-details">{details}</span>
        <p className="second-blog-desc">{description}</p>
  </div>
  </div>
  )
}
export default SecondBlog