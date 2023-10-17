import React from 'react'
import {BsFacebook} from "react-icons/Bs"
import {BiLogoInstagramAlt} from"react-icons/Bi"
import {BsYoutube} from "react-icons/Bs"
import {HiMenu} from "react-icons/Hi"
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='left-footer'>
      
      <p className='designed'>Designed by Sostene 2023</p>

      </div>

      <div className='right-footer'> 
      <i>
        <BsFacebook className='icons-footer'/>
        <BiLogoInstagramAlt className='icons-footer'/>
        <BsYoutube className='icons-footer'/>
        {/* <HiMenu className='icons-footer'/> */}
      </i>

      </div>
    
    </div>
  )
}
