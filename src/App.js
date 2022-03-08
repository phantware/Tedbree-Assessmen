import React, { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import JobApplication from './components/jobs/job-application/JobApplication'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [find, setFind] = useState('')

  return (
    <div className='App'>
      <Navbar setFind={setFind} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home find={find} />}></Route>
          <Route path='/jobs/:id' element={<JobApplication />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
