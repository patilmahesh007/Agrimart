import React from "react";
import { BlogHeading, TagLine, Blogimgage, Blogs } from "../../config/BlogData";
import "./Blog.css";
import BlogCard from "../../components/BlogCards/BlogCard";
import SecondBlog from "../../components/BlogCards/SecondBlog/SecondBlog";

function Blog() {
  return (
    <div className="blog-page">

      <div className="blog-page-header">
        <div class="blog-card">
          <div class="blog-image-container">
            <img src={Blogimgage} alt="Blog Image" />
            <div class="blog-content">
              <h2>{BlogHeading}</h2>
              <p>{TagLine}</p>
              <button class="read-more-btn">Read More</button>
            </div>
          </div>
        </div>

         <div className="small-blog-cards">
         {Blogs.map((blog) => {
              return (
                <SecondBlog
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

      <div className="main-component-cards">
        <div className="com-cards">
          <div className="component-cards">
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
