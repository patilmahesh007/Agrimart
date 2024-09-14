import React from 'react'
import "./Frutecard.css"

function Frutecard({title,img,prise}) {
  return (
    
    <div className='veg-continer'>
      <div className='info'>
      <img src={img} className='veg-img'/></div>
      <div className='info'>
      <h3>{title}</h3>
      </div>
      <div className='info'>
      <b> Price: {prise}</b> </div>
      <div className='btn-continer'>
      <button className='card-btn'> More</button>
      </div>
    </div>
  )
}

export default Frutecard