import React from 'react'

import './Exotics.css'

function Exotics() {
  return (
    <div className='veg-card-continer'>
    {
      ExoticsDATA.map((product)=>{
        
       return(
        <Exoticscard
        
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

export default Exotics