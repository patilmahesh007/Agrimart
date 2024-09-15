import React from 'react'

function Dairycard({title,img,prise}) {
  return (
    <div className='veg-continer-bg'>
    <div className=' frute-img-bg'>
    <img src={img} className='veg-img-bg'/></div>
    <div className='info'>
    <h3>{title}</h3>
    
    
    <b> Price: {prise}</b> </div>
    <div className='btn-continer'>
    <button className='card-btn'> More</button>
    </div>
  </div>
)
  
}

export default Dairycard