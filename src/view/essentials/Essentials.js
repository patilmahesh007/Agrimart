import React from 'react'
import "./Essentials.css"
import Esscard from '../../components/Essentilescard/Esscard'
import { ESSPRODUCT } from '../../config/Esscarddata'

function Essentials() {
  return (
    <div className='veg-card-continer'>
    {
      ESSPRODUCT.map((product)=>{
        
       return(
        <Esscard
        
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

export default Essentials