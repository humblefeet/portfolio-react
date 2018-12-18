import React from 'react'
import '../styles/index.css'
import SEO from '../components/seo'
import Intro from '../components/intro'
import Projects from '../components/projects'
// import Header from '../components/header'
// import Layout from '../components/layout';
import Welcome from '../components/welcome'
import Contact from '../components/contact'

const IndexPage = () => (
  <div>
    <div className="background">
      <Welcome/>
      <Intro/>
      <Projects/>
    </div>

    <Contact/>
  </div>
)

export default IndexPage
