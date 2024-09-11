import React from 'react'
import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import { PRODUCTS } from '../../config/carddata'
import Vegcard from '../../components/vegcard/vegcard'
import './card.css'
function cart() {
  return (
    <div>
          <Navbar/>
           <h1>Vegetables Card</h1>

           <div className='veg-card-continer'>
        {
          PRODUCTS.map((product)=>{
            
           return(
            <Vegcard
            
            img ={product.photo}
            title={product.name}
            prise={product.price}

            
            />

           )


            
          })
        }

</div>


           <Footer/>
    </div>
  )
}

export default cart