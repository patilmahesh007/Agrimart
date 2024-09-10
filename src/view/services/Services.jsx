import React from 'react'
import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import './service.css'
import TopBar from './../../components/topBar/TopBar';  // Assuming you have the TopBar component

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function Services() {
  return (
    <div>
      <Navbar />


      <div className="servides-page">
        <TopBar />  


      
      </div>
      <Footer />
    </div>
  )
}

export default Services