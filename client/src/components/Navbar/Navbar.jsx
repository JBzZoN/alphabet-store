import React from 'react'
import {FaHome, FaCartPlus} from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {

    const data = useSelector(store => store.cart)
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
                <span class="badge text-bg-danger">{data.length}</span>
            </div>
        </Link>
    </div>
  ) 
}

export default Navbar
