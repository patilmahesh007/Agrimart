import React from 'react'
import Vegcard from '../../components/vegcard/vegcard'
import './Vegetables.css'
import Navbar from "../../components/navbar/nav";
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/footer/footer';

function vegetables() {
  return (
    <>
    <Navbar/>
    <TopBar/>
    <Vegcard/>
    <Footer/>
    </>

  )
}

export default vegetables