import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../images/nav/logo2.png';
const Footer = () => {
  const socialMediaLinks = [
    {
      icon: 'https://img.icons8.com/?size=50&id=32292&format=png',
      alt: 'Instagram',
      href: 'https://www.instagram.com/agrimart20/'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/458/458595.png',
      alt: 'Twitter',
      href: 'https://x.com/Agrimart3'
    },
    {
      icon: 'https://img.icons8.com/?size=64&id=6mtfF8X7F8eV&format=png',
      alt: 'Gmail',
      href: 'mailto:agrimart@gmail.com'
    },
  ];

  const contactInfo = [
    { icon: 'https://cdn-icons-png.flaticon.com/128/535/535239.png', alt: 'Agromart pune ', href: 'https://maps.app.goo.gl/PjnAu7sv8ukzt1xb8' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/126/126509.png', alt: '+91 8468954007', href: 'tel:+918468954007' },
    { icon: 'https://img.icons8.com/?size=64&id=6mtfF8X7F8eV&format=png', alt: 'agromart@gmail.com', href: 'mailto:codeex0007@gmail.com' }
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

