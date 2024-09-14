import React from 'react'
import './Dairy.css'
import Dairycard from '../../components/Dairycard/Dairycard'
import { DAIRYDATA } from '../../config/Dairydata'

function Dairy() {
  return (
    <div className='veg-card-continer'>
    {
      DAIRYDATA.map((product)=>{
        
       return(
        <Dairycard
        
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

export default Dairy