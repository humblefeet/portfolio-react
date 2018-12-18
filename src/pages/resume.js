import React from 'react'
import '../styles/resume.css'
import ResumeImage from '../images/matthieubourgois_resume.jpg'
import ResumeFile from '../files/matthieubourgois_resume.pdf'
import Header from '../components/header'

const Resume = () => (
  <div className="mainResume">
    <Header/>
    <h1 >Resume</h1>
    <a href={ResumeFile} download>
      <button className="button">Download</button>
    </a>
    <img className="resume" 
      src={ResumeImage} 
      alt="resume"></img>
  </div>
)

export default Resume
