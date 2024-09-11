import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

function BlogCard({id, imgUrl, title, description, details}) { 

  return (
    <div className="blog-card-containers">
      <img src={imgUrl} className="blog-card-image" alt={title} />
       <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-desc">{description}</p>
        <h5 className="blog-card-details">{details}</h5>
      </div>
      <div>
        <hr/>
       <Link to={`/blog/${id}`}><button className="read-more-btn">Read More</button></Link>
      </div>
    </div>
  );
}

export default BlogCard;
