import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
const navigate  = useNavigate()


  const[post, setPost] = useState({
    firstname: '',
    lastname:'',
    email:'',
    password:''
  })
  const handleInput = (event) =>{
    setPost({...post, [event.target.name]: event.target.value})

  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://node-app-plsi.onrender.com/api/klab/user/signup', post)
      .then(response => {console.log(response)
        alert('account created succesfull')
      navigate("/Signin")

      })
      .catch(error => {
        alert('Failed to create account')
        if (error.response) {
          console.log('Server responded with data:', error.response.data);
          console.log('Status code:', error.response.status);
        } else if (error.request) {
          
          console.log('No response received:', error.request);
        } else {
          
          console.log('Error message:', error.message);
        }
      });
  }

  return (
    <div className='sign-in'>
        <h6 className='login-here'>SIGN UP HERE!</h6>
        <form action="#" className='login-form' onSubmit={handleSubmit}>
            
            <input type="text" className='input-login' placeholder='Enter firstname' name='firstname' onChange={handleInput} />
            <input type="text" className='input-login' placeholder='Enter lastname' name='lastname' onChange={handleInput}/>
            <input type="email" className='input-login' placeholder='Enter email' name='email' onChange={handleInput} />
            <input type="password" className='input-login'  placeholder='Enter password' name='password' onChange={handleInput}/>
            <button className='login-button'>SIGN UP</button>
            
            <h2 className='dont-have-account'>Have an  account?</h2>
            <Link to="/signin" className='register'>SignIn</Link>
            

        </form>
    </div>
  )
}

export default Signup