import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";

function login() {
  return (
    <div>
        <div><Navbar/></div>
        <div className="signup-container">

        </div>
        <Footer/>
    </div>
  )
}

export default login