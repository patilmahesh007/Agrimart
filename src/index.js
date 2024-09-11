import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './view/App/App';
import Contact from './view/Contact/contact';
import Login from './view/Login/login';
import Sign from './view/Login/Signup/sign';
import Expand from './view/ExpandCard/expand';
import About from './view/About-us/about';
import Blog from './view/Blog/Blog';
import Cart from './view/cart/cart';
import Services from './view/services/Services';
import ReadBlogs from './view/Blog/ReadBlogs/ReadBlogs';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Cart" element={<Cart />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:blogId" element={<ReadBlogs />} />

      <Route path="/expand" element={<Expand />} />



      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Sign />} />

    </Routes>
  </BrowserRouter>
);
