import React from 'react'
import LoginCenter from '../../components/login-center/LoginCenter'
import LoginLeft from '../../components/login-left/LoginLeft'
import LoginRight from '../../components/login-right/LoginRight'
import './login.css'

const Login = ({ user }) => {
  return (
    <div className='main-login'>
      <div className='main-login-left'>
        <LoginLeft />
      </div>
      <div className='main-login-center'>
        <LoginCenter />
      </div>
      <div className='main-login-right'>
        <LoginRight user={user} />
      </div>
    </div>
  )
}

export default Login
