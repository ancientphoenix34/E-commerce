import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h2>Get notified about new collections</h2>
      <p>Subscribe to our online community</p>
      <div>
        <input  className='newsletter-email' type="email" placeholder='Enter your email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
