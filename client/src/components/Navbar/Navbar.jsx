import React from 'react'
import {FaHome, FaCartPlus} from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="sidebar">
        <Link to="/" className='nav-link'>
            <div className="nav-item">
                <FaHome className="icon" />
                <span className="text">Home</span>
            </div>
        </Link>

        <Link to="/cart" className='nav-link'>
            <div className="nav-item">
                <FaCartPlus className="icon" />
                <span className="text">Cart</span>
            </div>
        </Link>
    </div>
  ) 
}

export default Navbar
