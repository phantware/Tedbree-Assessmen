import React from 'react'
import './jobapplication.css'

const JobApplication = () => {
  return (
    <div className='main'>
      <div className='close-btn'>
        <i class='fa fa-times close-icon' aria-hidden='true' />
      </div>
      <h1 className='job-desc'>Front end developer</h1>
      <div className='locations'>
        <span className='cv-icon'>
          <i className='fas fa-map-marker-alt icon2' />
        </span>
        <span className='location'>Ikeja Lagos</span>
      </div>
      <form className='job-form'>
        <div className='form-input'>
          <p>First Name</p>
          <input type='text' className='form-inputs' />
        </div>
        <div className='form-input'>
          <p>Last Name</p>
          <input type='text' className='form-inputs' />
        </div>
        <div className='form-input'>
          <p>Email Address</p>
          <input type='email' className='form-inputs' />
        </div>
        <div className='form-input'>
          <p>Location</p>
          <input type='text' className='form-inputs' />
        </div>
        <div className='form-input'>
          <p>Phone Number</p>
          <input type='text' className='form-inputs' />
        </div>
        <div className='upload-cv'>
          <div className='logo-img'>
            <img
              src='/assets/images/Vector2.svg'
              alt='cv-logo'
              className='upload-cv-logo2'
            />
            <img
              src='/assets/images/Vector1.svg'
              alt='cv-logo'
              className='upload-cv-logo1'
            />
          </div>
          <h3 className='drag-drop'>Drag and drop your CV here</h3>
          <h3 className='or'>or</h3>
          <div className='browse'>
            <label htmlFor='fileInput'>
              <div className='browseFile'>Browse file</div>
            </label>
            <input
              type='file'
              name='cv'
              id='fileInput'
              style={{ display: 'none' }}
            />
          </div>
        </div>
        <input
          type='submit'
          value='Submit Application'
          className='btn-submit'
        />
      </form>
    </div>
  )
}

export default JobApplication
