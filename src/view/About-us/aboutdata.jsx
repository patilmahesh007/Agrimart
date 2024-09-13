import React from 'react'
import "./about.css"

function AboutContain({ title, imgurl, description }) {

    return (
        <div className='about-card-container'>
            <div className='about-content'>
                <img src={imgurl}
                    className='about-content-image'
                    alt="food"
                />
                <h1>
                    {title}
                </h1>
                <p className='about-description'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default AboutContain