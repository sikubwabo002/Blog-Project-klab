import React from 'react'
import PostImage from '../assets/Bhpd8.jpg'
const Readmore = () => {
  return (
    <div>
    <div className='read-more-blog'>
        <img src={PostImage} alt="post"  className='post-image-readmore'/>
        <h1 className='heading'> The story of three lions in the darkness of Village!</h1>
        <h2 className='publisher'>Sostene Skb - 20 Oct 2023 </h2>
        
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam similique dolorem, sed natus exercitationem at harum placeat, explicabo totam dicta, atque rerum nesciunt doloremque aspernatur neque numquam itaque in voluptatibus!</p>
       <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eos minima eius aspernatur eveniet voluptatem, fugiat recusandae, optio omnis animi cupiditate deserunt asperiores similique molestias ad? Explicabo porro esse culpa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eos? Consequatur, suscipit sapiente quasi odit iusto voluptatum doloribus maxime, eum possimus architecto temporibus earum aliquam ab quod odio facilis fuga.</p>
       
       <div className='comment'>
        <h1 className='add-comment'>Leave a Comment</h1>
        <div className='drop-comment'>
            <form action="#">
            <input type="text" placeholder='Enter your name'  className='input-comment'/>
            <input type="text" placeholder='Enter Your comment'  className='input-comment'/>
            <button className='comment-button'>Comment</button>
            </form>

        </div>
        </div>
    </div>
    
    </div>
    
  )
}

export default Readmore