import React from 'react'
import './loginleft.css'

const LoginLeft = () => {
  return (
    <div className='main-left'>
      <div className='logo-warapper'>
        <img
          src='/assets/images/FindJobs.svg'
          alt='logo'
          className='logo-left'
        />
        <h4 className='logo-text-left'>for employers</h4>
      </div>
      <h1 className='intro-left'>
        Find the best candidates for your organisation.
      </h1>
      <img
        src='/assets/images/login-sitting.svg'
        alt='background-logo'
        className='background-logo'
      />
    </div>
  )
}

export default LoginLeft
