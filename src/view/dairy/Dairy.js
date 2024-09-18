import React from 'react'
import './Dairy.css'
import Dairycard from '../../components/Dairycard/Dairycard'
import TopBar from '../../components/TopBar/TopBar'
import Navbar from "../../components/navbar/nav";
import Footer from '../../components/footer/footer';


function Dairy() {
  return (
   <>
   <Navbar/>
   <TopBar/>
   <Dairycard/>
   <Footer/>
   </>
  )
  
}

export default Dairy