import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/mod_excl_img.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
<h1>Exclusive</h1>
<h1>Offers for you</h1>
<p>Only on best selling products</p>
<button>Check now</button>
      </div>
      <div className="offers-rigth">
<img className='exclusive_img' src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers

