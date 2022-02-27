import React, { useEffect } from 'react'
import './jobseeker.css'
import { data } from '../../data'
import { useState } from 'react'

const JobSeeker = ({ id, display }) => {
  const [info, setInfo] = useState({})

  const myData = data.filter((datum) => datum.id === info)
  const { title, details, location, qualifications, requirements } = myData[0]
  console.log('myData', myData)
  useEffect(() => {
    setInfo(id)
  }, [id])
  return (
    <>
      {display && (
        <div className='jds-main'>
          <h3 className='jds-title'>{title}</h3>
          <div className='location'>
            <span>
              <i className='fas fa-map-marker-alt icon2' />
            </span>
            <span className='jds-street'>{location}</span>
          </div>
          <div className='jds-apply'>
            <h3 className='jds-apply-txt'>Apply Via Find Job</h3>
          </div>
          <hr className='jds-line' />
          <h4 className='jds-desc'>{details}</h4>
          <ul className='jds-ul'>
            {qualifications.map((q) => (
              <li className='jds-li' key={q}>
                {q}
              </li>
            ))}
          </ul>
          <h2 className='jds-requirement-title'>
            Job Description/Requirements.
          </h2>
          <ul>
            {requirements.map((req) => (
              <li className='jds-req-li' key={req}>
                {req}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
export default JobSeeker
