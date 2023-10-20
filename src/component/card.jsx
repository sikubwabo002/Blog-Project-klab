import React from 'react'
// import PostImage from '../assets/Bhpd8.jpg'
import { Link } from 'react-router-dom'

export const Card = ({image,title,content,author}) => {
  
  return (
    <div className='post'>
        <img src={image} alt="post"  className='post-image'/>
        <h1 className='heading'>{title}</h1>
        <h2 className='publisher'>{author} </h2>
        
        <p className='description'>{content} </p>
        <button className='read-more'><Link to="/Readmore">READ MORE</Link></button>
        {/* <button className='delete-update'>Delete</button> */}
        {/* <button className='delete-update'>Update</button> */}
    </div>
  )
}
