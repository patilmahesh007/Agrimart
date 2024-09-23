import React from "react";
import { BlogHeading, TagLine, Blogimgage, Blogs } from "../../config/BlogData";
import "./Blog.css";
import BlogCard from "../../components/BlogCards/BlogCard";
import SecondBlog from "../../components/BlogCards/SecondBlog/SecondBlog";
import Header from "../../components/navbar/nav";
import Footer from "../../components/footer/footer";

function Blog() {
  return (
   <>
    <Header/>
    
    <div className="blog-page">
     
      <div className="blog-page-header">
        <div class="blog-card">
          <div class="blog-image-container">
            <img src={Blogimgage} alt="Blog Image" />
            <div class="blog-content">
              <h2>{BlogHeading}</h2>
              <p>{TagLine}</p>
              <a href="#below"><button class="read-more-btn">Read More</button></a>
            </div>
          </div>
        </div>
         <div className="small-blog-cards">
         {Blogs.map((blog) => {
            if(blog.type === "smallblogs"){
              return (
                <SecondBlog
                  id={blog.id}
                  imgUrl={blog.imgUrl}
                  title={blog.title}
                  description={blog.description}
                  details={blog.details}
                />
              );
            }
            })}
        </div>
      </div>

      <div id="below" className="main-component-cards">
        <div className="com-cards">
          <div className="component-cards">
            {Blogs.map((blog) => {
              if(blog.type === "largeblog"){
              return (
                <BlogCard
                  id={blog.id}
                  imgUrl={blog.imgUrl}
                  title={blog.title}
                  description={blog.description}
                  details={blog.details}
                />
              );
            }
            })}
          </div>
        </div>
      </div>
    </div>

   <Footer/> 
    </>
  );
}
 
export default Blog;
