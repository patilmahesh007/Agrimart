import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Blogs } from '../../../config/BlogData';
import "./ReadBlogs.css"
import Header from '../../../components/navbar/nav';
import Footer from '../../../components/footer/footer';

function ReadBlogs() {
    const { blogId } = useParams();
    const [blogDetails, setBlogDetails] = useState({
        imgUrl: "",
        title: "",
        content: []
    });

    useEffect(() => {
        const blogObject = Blogs.find((obj) => obj.id === parseInt(blogId, 10));
        if (blogObject) {
            setBlogDetails(blogObject);
        } else {
            setBlogDetails({
                imgUrl: "",
                title: "Blog not found",
                content: []
            });
        }
    }, [blogId]);

    return (
        <>
        <Header/>
        <div className='read-card-container'>
            <div className='read-card-content'>
            <p>ID: {blogId}</p>
            <h2>{blogDetails.title}</h2>
            <img src={blogDetails.imgUrl} alt={blogDetails.title} className='read-blog-image' />
            {blogDetails.content.map((content, index) => (
                <p key={index} className='read-blog-text'>{content}</p>
            ))}
        </div>
    </div>
    <Footer/>
    </>
    );
}

export default ReadBlogs;
