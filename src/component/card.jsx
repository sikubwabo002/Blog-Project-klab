import React from 'react'
import PostImage from '../assets/Bhpd8.jpg'
import { Link } from 'react-router-dom'

export const Card = () => {
  return (
    <div className='post'>
        <img src={PostImage} alt="post"  className='post-image'/>
        <h1 className='heading'>The story of three lions in the darkness of Village</h1>
        <h2 className='publisher'>Sostene Skb - 20 Oct 2023 </h2>
        
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam similique dolorem, sed natus exercitationem at harum placeat, explicabo totam dicta, atque rerum nesciunt doloremque aspernatur neque numquam itaque in voluptatibus! </p>
        <button className='read-more'><Link to="/Readmore">READ MORE</Link></button>
    </div>
  )
}
