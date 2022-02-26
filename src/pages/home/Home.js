import React from 'react'
import JobDescription from '../../components/jobs/JobDescription'
import './home.css'
import { data } from '../../data'
import JobSeeker from '../../components/jobs/JobSeeker'
console.log('here is data', data)

const Home = () => {
  return (
    <div className='home'>
      <div className='home-left'>
        {data.map((jd) => {
          return <JobDescription data={jd} />
        })}
      </div>
      <div className='home-right'>
        <JobSeeker />
      </div>
    </div>
  )
}

export default Home
