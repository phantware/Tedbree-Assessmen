import React, { useState } from 'react'

import './navbar.css'

const Navbar = ({ setFind }) => {
  const [type, setType] = useState('')
  return (
    <div className='navbar'>
      <div className='upper-nav'>
        <img
          src='../../assets/images/FindJobs.svg'
          alt='find-job-logo'
          className='nav-logo'
        />
        <ul className='nav-ul'>
          <li className='nav-li'>Jobs</li>
          <li className='nav-li-desc'>Company Review</li>
          <li className='nav-li-desc'>Find Salaries</li>
          <li className='nav-li'>
            <button className='btn-job'>Post Job</button>
          </li>
        </ul>
      </div>
      <h1 className='nav-desc'>Find Your Dream Job</h1>
      <div className='eclipse'>
        <img
          className='round-img-1'
          src='assets/images/Ellipse1.svg'
          alt='ellipse 1'
        />
        <img
          className='round-img-2'
          src='assets/images/Ellipse2.svg'
          alt='ellipse 2'
        />
        <img
          className='round-img-3'
          src='assets/images/Ellipse3.svg'
          alt='ellipse 3'
        />
      </div>
      <div className='search'>
        <span className='jobs'>
          <i className='fas fa-search icon' />
          <input
            type='text'
            placeholder='Front end developer'
            onChange={(e) => setType(e.target.value.toLowerCase())}
          />
        </span>
        <span className='line'></span>
        <span className='jobs'>
          <i className='fas fa-map-marker-alt icon' />
          <input
            type='text'
            placeholder='Lagos, Nigeria'
            onChange={(e) => setType(e.target.value.toLowerCase())}
          />
        </span>
        <input
          type='button'
          value='Search'
          className='search-btn'
          onClick={() => setFind(type)}
        />
      </div>
    </div>
  )
}

export default Navbar
