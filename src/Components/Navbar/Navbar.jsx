import React from 'react'
import './Navbar.css'
import logo from '../Assets/Shopping Bag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>TrendStore</p>
            </div>
            <ul className="nav-menu">
                <li>Shop<hr/></li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                </ul>
                <div className="nav-login-cart">
                    <button>login</button>
                    <FontAwesomeIcon icon={faCartPlus}/> 
                    <div className="nav-card-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
