import React from 'react'
import { Card } from '../component/card'
import Welcome from './Welcome'

// import {Footer} from '../component/Footer'
// import { Navbar } from './Navbar'

export const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <section className='welcome-page'>
      <Welcome/>

      </section>
      <section className='post-container'>
       <div className='grid_container'> 
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      </div>
      </section>
      {/* <Footer/> */}
     
    </div>
  )
}
