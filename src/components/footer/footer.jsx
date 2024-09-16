import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../images/nav/logo2.png';
import calling from "./images/call.png"
import location from "./images/location.png"
import email from "./images/email.png"
import insta from "./images/instagram.png"
import twitter from "./images/twitter.png"

const Footer = () => {
  const socialMediaLinks = [
    {
      icon: insta,
      alt: 'Instagram',
      href: 'https://www.instagram.com/agrimart20/'
    },
    {
      icon: twitter,
      alt: 'Twitter',
      href: 'https://x.com/Agrimart3'
    },
    {
      icon: email,
      alt: 'Gmail',
      href: 'mailto:agrimart@gmail.com'
    },
  ];

  const contactInfo = [
    { icon:location, alt: 'Agromart pune ', href: 'https://maps.app.goo.gl/PjnAu7sv8ukzt1xb8' },
    { icon: calling, alt: '+91 8468954007', href: 'tel:+918468954007' },
    { icon: email, alt: 'agromart@gmail.com', href: 'mailto:codeex0007@gmail.com' }
  ];

  const footerroutes = [
    {
      path: '/about',
      name: 'About us'
    },
    {
      path: '/services',
      name: 'Services'
    },
    {
      path: '/blog',
      name: 'Blog'
    },
    {
      path:'/feedback',
      name:'feedback'
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-Agro">
          <span className="footer-headding"><img className="footer-logo" src={logo} /></span>
          <p className='footer-para'>Agrimart is your one-stop destination for the freshest, most wholesome produce straight from the farm.</p>
        </div>
        <div className="footer-links">
          <span className="footer-headding">Useful Links</span>
          <ul className='footer-li-container'>

            {footerroutes.map((item, index) => (
              <Link to={item.path} key={index}>
                <li className='footer-li'>{item.name}</li>
              </Link>
            ))}


          </ul>
        </div>
        <div className="footer-contact">
          <span className="footer-headding">Contact Us</span><br />
          {contactInfo.map((info) => (
            <span key={info.alt}>
              <img src={info.icon} className="footer-img1" alt={info.alt } />
              <a className='footer-li' href={info.href}>{info.alt}</a><br />
            </span>
          ))}
        </div>
      </div>


      <div className='footer-links-copyright'>

        <p className="footer-copyright">&copy; 2024 All rights reserved Agromart</p>
        <div className="footer-logo-container">
          {socialMediaLinks.map((link) => (
            <a key={link.alt} href={link.href} className="footer-anchor">
              <img src={link.icon} className="footer-img" alt={link.alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

