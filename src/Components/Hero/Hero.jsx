import React from 'react'
import './Hero.css'
import Brand from '../Assets/brand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hero_image from '../Assets/final_0ne.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>New Arrivals only</h2>
            <div>
                <div className="hand-hand-icon">
                    <img src={Brand} alt="" className='brand_img'/>
                </div>
                <p>Brand new collections</p>
                <p>For everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest collections</div>
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
        </div>
        <div className="hero-rigth">
           <img src={hero_image} className='hero_img' alt="" />
        </div>
    </div>
  )
}

export default Hero
