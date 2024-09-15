import React from 'react'
import { PRODUCTS } from '../../config/carddata'
import Vegcard from '../../components/vegcard/vegcard'
import './Vegetables.css'

function vegetables() {
  return (
    
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

  )
}

export default vegetables