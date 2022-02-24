import React from 'react'

const JobDescription = ({ data }) => {
  return (
    <div className='jd-main'>
      <div className='jd-container'>
        <div className='jd-header'>
          <h1 className='jd-desc'>Front end developer</h1>
          <h3 className='jd-salary'>$2k-$5k</h3>
        </div>
        <div className='jd-location'>
          <h3 className='jd-locations'>Ikeja, Lagos</h3>
        </div>
        <div className='jd-detail'>
          <h4 className='jd-details'>
            We seek an experienced Javascript web application developer who is
            proficient with React.js and has excellent communication skills.
          </h4>
        </div>
        <input type='button' value='See more' />
      </div>
    </div>
  )
}

export default JobDescription
