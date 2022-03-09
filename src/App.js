import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import PrivateRoute from './components/navigation/PrivateRoute'
import MainRoute from './components/navigation/MainRoute'

function App() {
  const user = true

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route exact path='*' element={<PrivateRoute user={user} />}>
            <Route path='*' element={<MainRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
