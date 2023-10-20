import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";


const Signin = () => {
const navigate  = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    axios.post('https://node-app-plsi.onrender.com/api/klab/user/login', {
      email: email,
      password: password
    }).then(result => {
      console.log(result.data)
      alert('success logged in')
      navigate("/dashboard")
    })
      .catch(error => {
        alert('incorrect password')
        console.log(error)
      })
  }

  return (
    <div className='sign-in'>
        <h6 className='login-here'>LOGIN HERE</h6>
        <form action="#" className='login-form'>
            
            <input type="email" value={email} onChange={handleEmail} className='input-login' placeholder='Enter Email' />
            <input type="password" value={password} onChange={handlePassword} className='input-login'  placeholder='Enter password'/>
            
            <button className='login-button'onClick={handleApi}>Login</button>
            <h2 className='dont-have-account'>Don't have account?</h2>
            <ul><Link to="/signup" className='register'>Register</Link></ul>
            

        </form>
    </div>
  )
}

export default Signin