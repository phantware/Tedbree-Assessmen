import React from 'react'
import './jobdescription.css'

const JobDescription = ({ data, setId, setDisplay }) => {
  const { id, title, price, location, description } = data

  const setShow = (id) => {
    setId(id)
    setDisplay(true)
  }
  return (
    <div className='jd-main'>
      <div className='jd-container'>
        <div className='jd-header'>
          <h1 className='jd-desc'>{title}</h1>
          <h3 className='jd-salary'>{price}</h3>
        </div>
        <div className='jd-location'>
          <span>
            <i className='fas fa-map-marker-alt icon2' />
          </span>
          <span className='jd-locations'>{location}</span>
        </div>
        <h4 className='jd-detail'>{description}</h4>
        <button className='jd-btn' onClick={() => setShow(id)}>
          See more
        </button>
      </div>
    </div>
  )
}

export default JobDescription
