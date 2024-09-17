import React from 'react'
import './Fruits.css'
import FruitCard from '../../components/Frutecard/Frutecard'
import Navbar from "../../components/navbar/nav";
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/footer/footer';



function Fruits() {
  return (
    <>
    <Navbar/>
    <TopBar/>
 
<FruitCard/>
<Footer/>
</>

  )
}

export default Fruits