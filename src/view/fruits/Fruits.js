import React from 'react'
import './Fruits.css'
import Frutecard from '../../components/Frutecard/Frutecard'
import { FRUTESDATA } from '../../config/Frutesdata'




function Fruits() {
  return (
    <div className='veg-card-continer'>
    {
      FRUTESDATA.map((product)=>{
        
       return(
        <Frutecard
        
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

export default Fruits