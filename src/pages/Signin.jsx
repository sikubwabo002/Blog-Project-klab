import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='sign-in'>
        <h6 className='login-here'>LOGIN HERE</h6>
        <form action="#" className='login-form'>
            
            <input type="text" className='input-login' placeholder='Enter username' />
            <input type="password" className='input-login'  placeholder='Enter password'/>
            
            <button className='login-button'><Link to="/dashboard">SignIn</Link></button>
            <h2 className='dont-have-account'>Don't have account?</h2>
            <ul><Link to="/signup" className='register'>Register</Link></ul>
            

        </form>
    </div>
  )
}

export default Signin