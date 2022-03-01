import React from 'react'
import './jobdescription.css'

const JobDescription = ({ data, setId, setDisplay, index }) => {
  const { id, title, price, location, description } = data

  const setShow = (id) => {
    setId(id)
    setDisplay(true)
  }

  //searching inputs

  return (
    <div className='jd-main'>
      <div className={`${index === id ? 'active-card' : ''} jd-container`}>
        <div className='jd-header'>
          <h1 className={`${index === id ? 'active-color' : ''} jd-desc`}>
            {title}
          </h1>
          <h3 className={`${index === id ? 'active-color' : ''} jd-salary`}>
            {price}
          </h3>
        </div>
        <div className='jd-location'>
          <span>
            <i className='fas fa-map-marker-alt icon2' />
          </span>
          <span
            className={`${index === id ? 'active-color' : ''} jd-locations`}
          >
            {location}
          </span>
        </div>
        <h4 className={`${index === id ? 'active-color' : ''} jd-detail`}>
          {description}
        </h4>
        <button
          className={`${index === id ? 'active-btn' : ''} jd-btn`}
          onClick={() => setShow(id)}
        >
          See more
        </button>
      </div>
    </div>
  )
}

export default JobDescription
