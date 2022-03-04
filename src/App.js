import React, { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import JobApplication from './components/jobs/job-application/JobApplication'
import Navbar from './components/navbar/Navbar'
// import Home from './pages/home/Home'

function App() {
  const [find, setFind] = useState('')

  return (
    <div className='App'>
      <Navbar setFind={setFind} />
      {/* <Home find={find} /> */}
      <JobApplication />
      <Footer />
    </div>
  )
}

export default App
