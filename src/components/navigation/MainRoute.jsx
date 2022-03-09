import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Footer from '../footer/Footer'
import JobApplication from '../jobs/job-application/JobApplication'
import Navbar from '../navbar/Navbar'

const MainRoute = () => {
  const [find, setFind] = useState('')
  return (
    <>
      <Navbar setFind={setFind} />
      <Routes>
        <Route path='/' element={<Home find={find} />} />
        <Route path='/jobs/:id' element={<JobApplication />} />
      </Routes>
      <Footer />
    </>
  )
}

export default MainRoute
