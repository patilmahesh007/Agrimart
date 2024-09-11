import React from "react";
import { BlogHeading, TagLine, TagLine_2, Blogs } from "../../config/BlogData";
import "./Blog.css";
import BlogCard from "../../components/BlogCards/BlogCard";

function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-container">
        <h1>{BlogHeading}</h1>
        <p className="para">{TagLine}</p>
        <p className="para">{TagLine_2}</p>
      </div>

      <div className="main-component-cards">
        <div className="component-cards">
          <div className="first-blog-feature">
            {Blogs.map((blog) => {
              return (
                <BlogCard
                  id={blog.id}
                  imgUrl={blog.imgUrl}
                  title={blog.title}
                  description={blog.description}
                  details={blog.details}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
