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
    contenth2span1:"",
    contenth2para1:"",
    contenth2span2:"",
    contenth2para2:"",
    contenth2span3:"",
    contenth2para3:"",
    contenth2span4:"",
    contenth2para4:"",

    contenth3:"",
    contenth3Img:"",
    contenth3para:[],

    contenth4:"",
    contenth4para:[],
    
    contenth5:"",
    contenth5Img:"",
    contenth5para:"",
    contenth5head1:"",
    contenth5para1:[],
    contenth5head2:"",
    contenth5para2:[],
    contenth5head3:"",
    contenth5para3:[],


    
    
  });

  useEffect(() => {
    const blogObject = Blogs.find((obj) => obj.id === parseInt(blogId, 10));
    if (blogObject) {
      setBlogDetails(blogObject);
    }  }, [blogId]);

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
              <h3 className="all-content-headings">{blogDetails.contenth1}</h3>
              <p>{blogDetails.parah1}</p>

              <h3 className="all-content-headings">{blogDetails.contenth2}</h3>
             <img src={blogDetails.contenth2Img} alt="img" className="contenrh2img"/>
              <h5>i. {blogDetails.contenth2span}</h5>
              <span>{blogDetails.contenth2para}</span>

              <h5>ii. {blogDetails.contenth2span1}</h5>
              <span>{blogDetails.contenth2para1}</span>

              <h5>iii. {blogDetails.contenth2span2}</h5>
              <span>{blogDetails.contenth2para2}</span>

              <h5>iv. {blogDetails.contenth2span3}</h5>
              <span>{blogDetails.contenth2para3}</span>

              <h5>v. {blogDetails.contenth2span4}</h5>
              <span>{blogDetails.contenth2para4}</span>
              
              <h3>{blogDetails.contenth3}</h3>
              <img src={blogDetails.contenth3Img} alt="img" className="contenrh2img"/>
              {blogDetails.contenth3para.map((contenth3para, index) => (
                <p key={index} className="read-blog-text">
                  {contenth3para}
                </p>
              ))}

              <h3>{blogDetails.contenth4}</h3> 
              {blogDetails.contenth4para.map((contenth4para, index) => (
                <p key={index} className="read-blog-text">
                  {contenth4para}
                </p>
              ))}

                <h3>{blogDetails.contenth5}</h3>
                <img src={blogDetails.contenth5Img} alt="img" className="contenrh2img"/>
                <p>{blogDetails.contenth5para}</p>
                <h2>{blogDetails.contenth5head1}</h2>
                {blogDetails.contenth5para1.map((contenth5para1, index) => (
                <p key={index} className="read-blog-text">
                  {contenth5para1}
                </p>
              ))}
               
               <h2>{blogDetails.contenth5head2}</h2>
              {blogDetails.contenth5para2.map((contenth5para2, index) => (
                <p key={index} className="read-blog-text">
                  {contenth5para2}
                </p>
              ))}

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
