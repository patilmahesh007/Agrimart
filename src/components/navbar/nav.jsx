import './nav.css';
import { NavLink, useLocation } from 'react-router-dom'; // Importing useLocation to detect route changes
import React, { useEffect } from 'react';
import { headerdata } from './../../config/config';
import { Toaster, toast } from 'react-hot-toast';
import brandIcon from "./../../../src/images/nav/logo2.png";

function Header() {
  const location = useLocation();

  useEffect(() => {

    if (location.pathname === "/") {
      toast.success("Home loaded", {
        position: 'top-center',
        duration: 1000,
      });
    }

    else if (location.pathname === "/about") {
      toast.success("About loaded", {
        position: 'top-center',
        duration: 1000,
      });
    }

    else if (location.pathname === "/services") {
      toast.success("Services loaded", {
        position: 'top-center',
        duration: 1000,
      });
    }

    else if (location.pathname === "/contact") {
      toast.success("Contact loaded", {
        position: 'top-center',
        duration: 1000,
      });
    }

    else {
      const pageName = location.pathname.replace("/", "");
      toast.success("page loaded", {
        position: 'top-center',
        duration: 1000,
      });
    }
  }, [location]);

  return (
    <div className='header-container'>
      <header className="header">
        <nav className="navbar">
          <div className="nav-logo">
            <NavLink to="/">
              <img src={brandIcon} alt="brand logo" className='brand-logo' />
            </NavLink>
          </div>

          <ul className="nav-menu">
            {headerdata.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.to}
                  style={({ isActive }) =>
                    isActive ? { color: 'white' } : { color: '#999999' }
                  }
                  className="nav"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Toaster />
    </div>
  );
}

export default Header;
