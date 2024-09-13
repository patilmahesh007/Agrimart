import React, { useState } from 'react';
import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/nav";
import IMG from "./img/bg.svg";


function sign() {
  return (
    <div>
        <div><Navbar/></div>
        <div className="signup-container">
        <div className="img">
          <img src={IMG} alt="Background" />
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default sign