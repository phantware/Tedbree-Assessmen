import React from 'react'
import JobDescription from '../../components/jobs/JobDescription'
import './home.css'
import { data } from '../../data'
console.log('here is data', data)

const Home = () => {
  return (
    <div className='home'>
      {data.map((jd) => {
        return <JobDescription data={jd} />
      })}
    </div>
  )
}

export default Home
