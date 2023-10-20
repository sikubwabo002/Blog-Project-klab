import React, { useEffect, useState } from 'react'
import { Card } from '../component/card'
import Welcome from './Welcome'

// import {Footer} from '../component/Footer'
// import { Navbar } from './Navbar'

export const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() =>{
    // fetch("https://node-app-plsi.onrender.com/api/klab/blog/read")
    //     .then((response) => response.json())
    //     .then((res) => {
    //       if(res.data){
    //         setPosts(res.data)
    //       }
    //     })
    //   }, [])

    const getAll = async()=>{
      const response = await fetch("https://node-app-plsi.onrender.com/api/klab/blog/read");
      const res = await response.json();
      setPosts(res.data)
    }
    getAll();
  },[])

  console.log("THIS MY POSTS", posts)
  return (
    <div>
      
      <section className='welcome-page'>
      <Welcome/>

      </section>
      {/* <section className='post-container'> */}
       <div className='grid_container'> 
      {posts.length > 0 ? posts.map((post, index) => (
            <Card key={index} title={post.title} image={post.blogImage} author={post.author} content={post.content}/>
          )): <p>is loading</p>
      }
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}


      </div>
      {/* </section> */}
      
      
     
    </div>
  )
}
