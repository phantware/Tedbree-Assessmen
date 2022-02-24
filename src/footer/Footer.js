import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='rightFooter'>
        <img
          src='../assets/images/FindJobs.svg'
          alt=''
          className='footer-logo'
        />
        <h3 className='copywright'>
          &copy; 2021 <span className='find-job'>FindJobs</span>
        </h3>
      </div>
      <div className='centerFooter'>
        <h2 className='qlink'>Quick Links</h2>
        <ul className='footer-ul'>
          <li className='footer-li'>Home</li>
          <li className='footer-li'>About</li>
          <li className='footer-li'>Calender</li>
          <li className='footer-li'>Terms and conditions</li>
        </ul>
      </div>
      <div className='leftFooter'>
        <h2 className='social-media'>Social Media</h2>
        <ul className='social-ul'>
          <li className='social-li'>
            <i className='fab fa-instagram icon'></i>
          </li>
          <li className='social-li'>
            <i className='fab fa-facebook icon'></i>
          </li>
          <li className='social-li'>
            <i className='fab fa-twitter icon'></i>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
