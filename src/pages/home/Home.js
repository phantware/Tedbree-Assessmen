import React from 'react'
import JobDescription from '../../components/jobs/job-description/JobDescription.jsx'
import './home.css'
import { data } from '../../data'
import JobSeeker from '../../components/jobs/job-seekers/JobSeeker.jsx'
import { useState } from 'react'
// import { useEffect } from 'react'

const Home = ({ find }) => {
  const [display, setDisplay] = useState(false)
  const [id, setId] = useState('')

  const findJob = (id) => {
    if (id === '') {
      return data
    } else {
      const jd = data.filter((job) => {
        return (
          job.location.toLowerCase().includes(id) ||
          job.title.toLowerCase().includes(id)
        )
      })
      return jd
    }
  }
  // useEffect(() => {}, [find])
  return (
    <div className='home'>
      <div className='home-left'>
        {findJob(find).map((jd) => {
          return (
            <JobDescription
              data={jd}
              setId={setId}
              setDisplay={setDisplay}
              index={id}
            />
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
