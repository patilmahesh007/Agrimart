import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

function BlogCard({ id, imgUrl, title, description, details }) {
  return (
    <div className="blog-card-containers">
      <img src={imgUrl} className="blog-card-image" alt={title} />
      <div className="blog-card-content">
        <h4 className="blog-card-title">{title}</h4>
        <hr />
        <span className="blog-card-details">{details}</span>

        <p className="blog-card-desc">{description}</p>

        <Link to={`/blog/${id}`}>
          <button  className="read-more">Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
