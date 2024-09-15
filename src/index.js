import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './view/App/App';
import Login from './view/Login/login';
import Sign from './view/Login/Signup/sign';
import Expand from './view/ExpandCard/expand';
import About from './view/About-us/about';
import Blog from './view/Blog/Blog';
import Cart from './view/cart/cart';
import Services from './view/services/Services';
import ReadBlogs from './view/Blog/ReadBlogs/ReadBlogs';
import Feedback from './view/Feedback/Feedback';
import './index.css';


import Essentials from './view/essentials/Essentials';
import Dairy from './view/dairy/Dairy';
import Fruits from './view/fruits/Fruits';
import Exotics from './view/exotics/Exotics';
import Vegetables from './view/vegetables/Vegetables';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Cart" element={<Cart />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:blogId" element={<ReadBlogs />} />

      <Route path="/expand" element={<Expand />} />
      {/* <Route path="/feedback" element={<Feedback />} /> */}





      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Sign />} />

      <Route path="/Essentials" element={<Essentials/>} />
      <Route path="/Dairy" element={<Dairy/>} />
      <Route path="/Card/:cardId" element={<Card/>} />
      <Route path="/Exotics" element={<Exotics/>} />
      <Route path="/Vegetables" element={<Vegetables/>} />
      

  
    </Routes>
  </BrowserRouter>
);
