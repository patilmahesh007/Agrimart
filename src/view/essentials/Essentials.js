import React from 'react'
import "./Essentials.css"
import Esscard from '../../components/Essentilescard/Esscard'
import TopBar from '../../components/TopBar/TopBar'
import Navbar from "../../components/navbar/nav";
import Footer from '../../components/footer/footer';


function Essentials() {
  return (
    <>
   <Navbar/>
    <TopBar/>
<Esscard/>
<Footer/>
</>
    
  )
}

export default Essentials