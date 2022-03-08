import React, { useEffect } from 'react'
import './jobseeker.css'
import { data } from '../../../data'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const JobSeeker = ({ id, display }) => {
  const [info, setInfo] = useState({})
  const myData = data.filter((datum) => datum.id === info)
  const check = myData.length > 0

  useEffect(() => {
    setInfo(id)
  }, [id])
  return (
    <>
      {display && (
        <div className='jds-main'>
          <h3 className='jds-title'>{check ? myData[0].title : null}</h3>
          <div className='location'>
            <span>
              <i className='fas fa-map-marker-alt icon2' />
            </span>
            <span className='jds-street'>
              {check ? myData[0].location : null}
            </span>
          </div>
          <div className='jds-apply'>
            <Link to='/jobs' style={{ textDecoration: 'none' }}>
              <h3 className='jds-apply-txt'>Apply Via Find Job</h3>
            </Link>
          </div>
          <hr className='jds-line' />
          <h4 className='jds-desc'>{check ? myData[0].details : null}</h4>
          <ul className='jds-ul'>
            {check
              ? myData[0].qualifications.map((q) => (
                  <li className='jds-li' key={q}>
                    {q}
                  </li>
                ))
              : null}
          </ul>
          <h2 className='jds-requirement-title'>
            Job Description/Requirements.
          </h2>
          <ul>
            {check
              ? myData[0].requirements.map((req) => (
                  <li className='jds-req-li' key={req}>
                    {req}
                  </li>
                ))
              : null}
          </ul>
        </div>
      )}
    </>
  )
}
export default JobSeeker
