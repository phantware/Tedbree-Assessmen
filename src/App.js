import React, { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import PrivateRoute from './components/navigation/PrivateRoute'
import MainRoute from './components/navigation/MainRoute'

function App() {
  const [find, setFind] = useState('')
  const user = false

  return (
    <div className='App'>
      <Navbar setFind={setFind} />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route exact path='*' element={<PrivateRoute user={user} />}>
            <Route path='*' element={<MainRoute find={find} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
