import React from 'react'
import './loginright.css'

const LoginRight = () => {
  return (
    <div className='login-right-main'>
      <div className='eclipse'>
        <img
          className='login-right-img-1'
          src='assets/images/Ellipse1.svg'
          alt='ellipse 1'
        />
        <img
          className='login-right-img-2'
          src='assets/images/Ellipse2.svg'
          alt='ellipse 2'
        />
        <img
          className='login-right-img-3'
          src='assets/images/Ellipse3.svg'
          alt='ellipse 3'
        />
      </div>
      <form className='login-right-form'>
        <h1 className='login-right-desc'>Login</h1>
        <div className='login-right-form-input'>
          <p>Email</p>
          <input type='email' className='login-right-form-inputs' />
        </div>
        <div className='login-right-form-input'>
          <p>Password</p>
          <input type='password' className='login-right-form-inputs' />
        </div>
        <button type='button' className='btn-submit-right'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginRight
