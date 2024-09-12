import './nav.css';
import { NavLink } from 'react-router-dom';
import React, { } from 'react';
import {headerdata} from "./../../config/config"

function Header() {
 
  return (
    <header className="header">
      <div className="nav-container">
       {headerdata.map((item,index)=>(
        <NavLink
        key={index}
        to={item.to}
        style={({ isActive }) =>
          isActive ? { color: 'white' } : { color: 'grey' }
        }
        className="nav"
      >
       {item.name}
      </NavLink>
       ))}
        

      
      </div>
    </header>
  );
}

export default Header;
