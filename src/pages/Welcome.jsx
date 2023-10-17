import React from 'react'
import ProfileImage from '/src/assets/PXL_20231001_121233715.PORTRAIT.jpg'

const Welcome = () => {
  return (
    <>
    <div className='welcome-content-left'>
    <img src={ProfileImage} alt="image"  className='profile-image'/>
    <div className='welcome-head-details'>
    <h1 className='welcome-heading'>WELCOME TO MY BLOG!</h1>
    <p className='welcome-details'>"I am Sikubwabo Sostene, a third-year student at the University of Rwanda. Through my life experiences, I've come to understand the importance of loving everyone. The teachings of God emphasize that love is fundamental. Therefore, I invite you warmly to my blog. Feel free to read, share, and comment as a sign of support. Remember, putting God first and loving one another are my guiding principles."</p>
    </div>
    </div>
    <div className='welcome-content-right'>
    <h1 className='welcome-heading-qoute'>  "Be yourse<span className='span-quote'>lf; everyone else is alrea</span>dy taken."</h1>
      <button className='welcome-signin'>SignIn</button>
    </div>
    </>
  )
}

export default Welcome