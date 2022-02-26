import React from 'react'
import './jobseeker.css'

const JobSeeker = () => {
  return (
    <div className='jds-main'>
      <h3 className='jds-title'>Front end developer</h3>
      <div className='location'>
        <span>
          <i className='fas fa-map-marker-alt icon2' />
        </span>
        <span className='jds-street'>Ikeja Lagos</span>
      </div>
      <div className='jds-apply'>
        <h3 className='jds-apply-txt'>Apply Via Find Job</h3>
      </div>
      <hr className='jds-line' />
      <h4 className='jds-desc'>
        In this role, you will be responsible for developing and implementing
        user interface components using React.js concepts and workflow such as
        Redux, Flux, and Webpack. You will also be responsible for profiling and
        improving front-end performance and documenting our front-end codebase.
      </h4>
      <ul className='jds-ul'>
        <li className='jds-li'>Minimum Qualification: Degree</li>
        <li className='jds-li'>Experience Level: Senior level</li>
        <li className='jds-li'> Experience Length: 5 years</li>
      </ul>
      <h2 className='jds-requirement-title'>Job Description/Requirements</h2>
      <ul>
        <li className='jds-req-li'>
          5+ years experience of front-end related (HTML5 + JS + CSS3)
          development work experience, familiar with mobile application
          development;
        </li>
        <li className='jds-req-li'>
          Proficient in JavaScript / Typescript, mastering technologies such as
          HTML, CSS, DOM, AJAX, etc., can quickly complete the established
          interactive design functions; At least 4 years experience is required.
        </li>
        <li className='jds-req-li'>
          Thorough understanding of React.js and its core principles
        </li>
        <li className='jds-req-li'>
          Experience with popular React.js workflows (such as Flux or Redux)
        </li>
        <li className='jds-req-li'>Familiarity with RESTful API’s</li>
        <li className='jds-req-li'>Knowledge of isomorphic react is a plus</li>
        <li className='jds-req-li'>
          Familiarity with mordern front-end build pipelines and tools
        </li>
        <li className='jds-req-li'>
          Experience with common front-end development tools such as Babel,
          Webpack, NPM e.t.c
        </li>
      </ul>
    </div>
  )
}

export default JobSeeker
