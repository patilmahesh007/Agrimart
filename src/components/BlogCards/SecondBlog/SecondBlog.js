import React from "react";
import "./SecondBlog.css";
import { Link } from "react-router-dom";

function SecondBlog({ id, imgUrl, title, description, details }) {
  return (
    <div className="second-blog-container">
      <img src={imgUrl} className="second-blog-image" alt={title} />
      <div className="second-blog-content">
        <h4 className="second-blog-title">{title}</h4>
        <hr />
        <span className="second-blog-details">{details}</span>
        <p className="second-blog-desc">{description}</p>
        <Link to={`/blog/${id}`}>
          <button className="read-more">Read More</button>
        </Link>
      </div>
    </div>
  );
}
export default SecondBlog;
