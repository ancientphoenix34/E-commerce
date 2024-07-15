import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Shopping Bag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Navbar = () => {

const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>TrendStore</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:"none"}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to='/men' style={{textDecoration:"none"}}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link to='women' style={{textDecoration:"none"}}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='kids' style={{textDecoration:"none"}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
                </ul>
                <div className="nav-login-cart">
                    <Link to='/login'><button>login</button></Link>
                    <Link to='/cart'><FontAwesomeIcon icon={faCartPlus}/> </Link>
                    <div className="nav-card-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
