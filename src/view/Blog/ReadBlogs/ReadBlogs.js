import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blogs } from "../../../config/BlogData";
import "./ReadBlogs.css";
import Header from "../../../components/navbar/nav";
import Footer from "../../../components/footer/footer";

function ReadBlogs() {
  const { blogId } = useParams();
  const [blogDetails, setBlogDetails] = useState({
    blog10Content: [],

    imgUrl: "",
    title: "",

    content: [],
    contenth1: "",
    parah1: "",

    contenth2: "",
    contenth2Img: "",
    contenth2sub: "",
    contenth2span: "",
    contenth2para: "",
    contenth2span1: "",
    contenth2para1: "",
    contenth2span2: "",
    contenth2para2: "",
    contenth2span3: "",
    contenth2para3: "",
    contenth2span4: "",
    contenth2para4: "",

    contenth3: "",
    contenth3Img: "",
    contenth3para: [],

    contenth4: "",
    contenth4para: [],

    contenth5: "",
    contenth5Img: "",
    contenth5para: "",
    contenth5head1: "",
    contenth5para1: [],
    contenth5head2: "",
    contenth5para2: [],
    contenth5head3: "",
    contenth5para3: [],
  });

  useEffect(() => {
    const blogObject = Blogs.find((obj) => obj.id === parseInt(blogId, 10));
    if (blogObject) {
      setBlogDetails(blogObject);
    }
  }, [blogId]);

  return (
    <>
      <Header />
      <div className="read-card-container">
        <div className="read-card-content">
          {/* <p>ID: {blogId}</p> */}
          <div className="read-blog-main-heading">
            <h1>{blogDetails.title}</h1>
          </div>
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
              <h1 className="all-content-headings">{blogDetails.contenth1}</h1>
              <p className="read-blog-text">{blogDetails.parah1}</p>

              <h1 className="all-content-headings">{blogDetails.contenth2}</h1>
              <img
                src={blogDetails.contenth2Img}
                alt="img"
                className="contenrh2img"
              />
              <h3 className="read-blog-span-text-heading">
                {blogDetails.contenth2span}
              </h3>
              <p className="read-blog-span-text">{blogDetails.contenth2para}</p>

              <h3 className="read-blog-span-text-heading">
                {blogDetails.contenth2span1}
              </h3>
              <p className="read-blog-span-text">
                {blogDetails.contenth2para1}
              </p>

              <h3 className="read-blog-span-text-heading">
                {blogDetails.contenth2span2}
              </h3>
              <p className="read-blog-span-text">
                {blogDetails.contenth2para2}
              </p>

              <h3 className="read-blog-span-text-heading">
                {blogDetails.contenth2span3}
              </h3>
              <p className="read-blog-span-text">
                {blogDetails.contenth2para3}
              </p>

              <h3 className="read-blog-span-text-heading">
                {blogDetails.contenth2span4}
              </h3>
              <p className="read-blog-span-text">
                {blogDetails.contenth2para4}
              </p>

              <h1 className="all-content-headings">{blogDetails.contenth3}</h1>
              <img
                src={blogDetails.contenth3Img}
                alt="img"
                className="contenrh2img"
              />
              {blogDetails.contenth3para.map((contenth3para, index) => (
                <p key={index} className="read-blog-text">
                  {contenth3para}
                </p>
              ))}

              <h1 className="all-content-headings">{blogDetails.contenth4}</h1>
              {blogDetails.contenth4para.map((contenth4para, index) => (
                <p key={index} className="read-blog-text">
                  {contenth4para}
                </p>
              ))}

              <h1 className="all-content-headings">{blogDetails.contenth5}</h1>
              <img
                src={blogDetails.contenth5Img}
                alt="img"
                className="contenrh2img"
              />
              <p className="read-blog-text">{blogDetails.contenth5para}</p>
              <h2> {blogDetails.contenth5head1}</h2>
              {blogDetails.contenth5para1.map((contenth5para1, index) => (
                <p key={index} className="read-blog-text">
                  {contenth5para1}
                </p>
              ))}

              <h2> {blogDetails.contenth5head2}</h2>
              {blogDetails.contenth5para2.map((contenth5para2, index) => (
                <p key={index} className="read-blog-text">
                  {contenth5para2}
                </p>
              ))}
            </div>
            <div className="content-heading">
              <h1>Content</h1>
              {blogDetails.blog10Content.map((blog10Content, index) => (
                <h2 key={index} className="blogs-content-headings">
                  {blog10Content}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReadBlogs;
