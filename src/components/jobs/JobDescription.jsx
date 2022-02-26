import React from 'react'
import './jobdescription.css'

const JobDescription = ({ data }) => {
  return (
    <div className='jd-main'>
      <div className='jd-container'>
        <div className='jd-header'>
          <h1 className='jd-desc'>Front end developer</h1>
          <h3 className='jd-salary'>$2k-$5k</h3>
        </div>
        <div className='jd-location'>
          <span>
            <i className='fas fa-map-marker-alt icon2' />
          </span>
          <span className='jd-locations'>Ikeja, Lagos</span>
        </div>
        <h4 className='jd-detail'>
          We seek an experienced Javascript web application developer who is
          proficient with React.js and has excellent communication skills.
        </h4>
        <button className='jd-btn'>See more</button>
      </div>
    </div>
  )
}

export default JobDescription
