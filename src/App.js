import React, { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {
  const [find, setFind] = useState('')

  return (
    <div className='App'>
      <Navbar setFind={setFind} />
      <Home find={find} />
      <Footer />
    </div>
  )
}

export default App
