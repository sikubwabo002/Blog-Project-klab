import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import {HiMenu} from 'react-icons/Hi'

export const Navbar = () => {
 
  return (

    <div className='navbar'>
      <h2 className='logo'>SOSTENE</h2>
      <ul className='ul-class'>
        <Link to="/" className='lists'>HOME</Link>
        <Link to="/About" className='lists'>ABOUT US</Link>
        <Link to="Contact/" className='lists'> CONTACT US</Link>
        <Link to="/Signin" className='lists'>SIGN IN</Link>
        

      </ul>
      <div className='dropdown'>
       {/* <span>mouse here</span> */}
      {/* <button className='menu'>Menu</button> */}
      <HiMenu className='menu-icon'/>

      <div className='dropdown-content'>
      <Link to="/" className='phone-menu'>HOME</Link>
        <Link to="/About" className='phone-menu'>ABOUT US</Link>
        <Link to="Contact/" className='phone-menu'> CONTACT US</Link>
        <Link to="/Signin" className='phone-menu'>SIGN IN</Link>
        
      </div>
      </div>
    </div>
  )
}
