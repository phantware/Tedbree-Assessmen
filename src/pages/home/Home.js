import React from 'react'
import JobDescription from '../../components/jobs/JobDescription'
import './home.css'
import { data } from '../../data'
import JobSeeker from '../../components/jobs/JobSeeker'
import { useState } from 'react'

const Home = () => {
  const [display, setDisplay] = useState(false)
  const [id, setId] = useState('')
  return (
    <div className='home'>
      <div className='home-left'>
        {data.map((jd) => {
          return (
            <JobDescription data={jd} setId={setId} setDisplay={setDisplay} />
          )
        })}
      </div>
      <div className='home-right'>
        <JobSeeker id={id} display={display} />
      </div>
    </div>
  )
}

export default Home
