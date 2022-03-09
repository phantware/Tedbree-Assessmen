import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/home/Home'
import JobApplication from '../jobs/job-application/JobApplication'

const MainRoute = ({ find }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home find={find} />} />
        <Route path='/jobs/:id' element={<JobApplication />} />
      </Routes>
    </>
  )
}

export default MainRoute
