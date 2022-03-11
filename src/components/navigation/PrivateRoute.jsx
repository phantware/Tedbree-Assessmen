import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const PrivateRoute = ({ user }) => {
  let navigate = useNavigate()
  console.log('user from PrivateRoute', user)
  // useEffect(() => {
  //   if (user) {
  //     navigate('/')
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user])
  return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
