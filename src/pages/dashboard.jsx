import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'





  const Dashboard = () => {
    const[post, setPost] = useState({
      blogImage: '',
      title:'',
      content:'',
      
    })
    const handleInput = (event) =>{
      setPost({...post, [event.target.name]: event.target.value})
  
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      axios.post('https://node-app-plsi.onrender.com/api/klab/blog/create', post)
      .then(response => {console.log(response)
        alert('auploaded succesfull')
      

      })
        .catch(error => {
        alert('Failed to upload')

          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Server responded with data:', error.response.data);
            console.log('Status code:', error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.log('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an error
            console.log('Error message:', error.message);
          }
        });
    }

  return (
    <div className='dashboard'>
      <h6 className='login-here'>DASHBOARD</h6>
      <form action="#" className='form-dashboard' onSubmit={handleSubmit}>

        <label className='choose-an-image'> Choose an Image</label>

        <input type="file" name="image" id="image"  className='input-dashboard' onChange={handleInput}/>
        <input type="text" name="heading" id="heading" placeholder='Enter Heading title' className='input-dashboard' onChange={handleInput} />
        {/* <input type="text" placeholder='Enter author name' className='input-dashboard' /> */}
        {/* <input type="date" placeholder='Enter date'  className='input-dashboard'/> */}
        <input type="text" placeholder='Enter Description' className='input-dashboard-description' onChange={handleInput}/>
        <button className='publish-button-dashboard'>Add Blog</button>
        <button className='publish-button-dashboard'><Link to="/Viewblog">View Blogs</Link></button>

      </form>
      
        
    </div>
  )
}

export default Dashboard