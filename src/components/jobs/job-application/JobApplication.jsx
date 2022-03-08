import React from 'react'
import './jobapplication.css'
import { useDropzone } from 'react-dropzone'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../../../data'

const JobApplication = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  const navigate = useNavigate()
  const { id } = useParams()

  const myData = data.filter((datum) => datum.id === parseInt(id))

  const files = acceptedFiles.map((file) => (
    <h1 key={file.path}>{file.path}</h1>
  ))
  return (
    <div className='main'>
      <div className='close-btn'>
        <i
          className='fa fa-times close-icon'
          aria-hidden='true'
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className='job-desc'>{myData[0].title}</h1>
      <div className='locations'>
        <span className='cv-icon'>
          <i className='fas fa-map-marker-alt icon2' />
        </span>
        <span className='location'>{myData[0].location}</span>
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
        <div {...getRootProps({ className: 'upload-cv' })}>
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
            <input style={{ display: 'none' }} {...getInputProps()} />
          </div>
          {files}
        </div>

        <button type='button' className='btn-submit'>
          Submit Application
        </button>
      </form>
    </div>
  )
}

export default JobApplication
