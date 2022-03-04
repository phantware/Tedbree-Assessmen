import React from 'react'

const JobApplication = () => {
  return (
    <div className='main'>
      <h1 className='desc'>Front end developer</h1>
      <div className='locations'>
        <span className='cv-icon'>icon</span>
        <span className='location'>icon</span>
      </div>
      <form className='job-form'>
        <div className='form-input'>
          <p>First Name</p>
          <input type='text' />
        </div>
        <div className='form-input'>
          <p>Last Name</p>
          <input type='text' />
        </div>
        <div className='form-input'>
          <p>Email Address</p>
          <input type='email' />
        </div>
        <div className='form-input'>
          <p>Location</p>
          <input type='text' />
        </div>
        <div className='form-input'>
          <p>Phone Number</p>
          <input type='text' />
        </div>
        <div className='upload-cv'>
          <div className='upload-cv-logo'>upload cv logo</div>
          <h3 className='drag-drop'>Drag and drop your CV here</h3>
          <div className='browse'>
            <input type='file' name='cv' id='cv' className='file' />
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
