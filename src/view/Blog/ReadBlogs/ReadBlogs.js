import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blogs } from "../../../config/BlogData";
import "./ReadBlogs.css";
import Header from "../../../components/navbar/nav";
import Footer from "../../../components/footer/footer";

function ReadBlogs() {
  const { blogId } = useParams();
  const [blogDetails, setBlogDetails] = useState({
    imgUrl: "",
    title: "",
    content: [],
    contenth1:"",
    parah1:"",
    contenth2:"",
    contenth2Img:"",
    contenth2sub:"",
    contenth2span:"",
    contenth2para:"",
  });

  useEffect(() => {
    const blogObject = Blogs.find((obj) => obj.id === parseInt(blogId, 10));
    if (blogObject) {
      setBlogDetails(blogObject);
    } else {
      setBlogDetails({
        imgUrl: "",
        title: "Blog not found",
        content: [],
        contenth1:"",
        parah1:"",
       
      });
    }
  }, [blogId]);

  return (
    <>
      <Header />
      <div className="read-card-container">
        <div className="read-card-content">
          <p>ID: {blogId}</p>
          <h2>{blogDetails.title}</h2>
          <img
            src={blogDetails.imgUrl}
            alt={blogDetails.title}
            className="read-blog-image"
          />

          <div className="text-content-heading">
            <div className="text-content">
              {blogDetails.content.map((content, index) => (
                <p key={index} className="read-blog-text">
                  {content}
                </p>
              ))}
              <h3>{blogDetails.contenth1}</h3>
              <p>{blogDetails.parah1}</p>

              <h3>{blogDetails.contenth2}</h3>
             <img src={blogDetails.contenth2Img} alt="img" className="contenrh2img"/>
              <h5>i. {blogDetails.contenth2span}</h5>
              <span>{blogDetails.contenth2para}</span>
              

            </div>
            <div className="content-heading"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReadBlogs;
