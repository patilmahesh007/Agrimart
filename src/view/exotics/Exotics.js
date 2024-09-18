import React from 'react'
import Exoticscard from '../../components/Exoticscard/Exoticscard'
import Navbar from "../../components/navbar/nav";
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/footer/footer';

function Exotics() {
  return (
    <>
    <Navbar/>
    <TopBar/>
    <div><Exoticscard/></div>
    <Footer/>
    </>
  )
}

export default Exotics