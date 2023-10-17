import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='sign-in'>
        <h6 className='login-here'>SIGN UP HERE!</h6>
        <form action="#" className='login-form'>
            
            <input type="text" className='input-login' placeholder='Enter firstname' />
            <input type="text" className='input-login' placeholder='Enter lastname' />
            <input type="email" className='input-login' placeholder='Enter email' />
            <input type="password" className='input-login'  placeholder='Enter password'/>
            <button className='login-button'>SIGN UP</button>
            
            <h2 className='dont-have-account'>Have an  account?</h2>
            <Link to="/signin" className='register'>SignIn</Link>
            

        </form>
    </div>
  )
}

export default Signup