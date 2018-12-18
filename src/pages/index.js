import React from 'react'
import '../styles/index.css'
import Intro from '../components/intro'
import Projects from '../components/projects'
import Welcome from '../components/welcome'
import Contact from '../components/contact'
// import Header from '../components/header'
import {Router, Switch, Route} from 'react-router-dom'
import Resume from '../pages/resume'

const IndexPage = () => (
  <div>
    <div className="background">
      <nav className="inner">
        <h1 className="title big">
            Matthieu Bourgois
          </h1>
      </nav>
      <Welcome/>
      <Intro/>
      <Projects/>
    </div>

    <Contact/>

    <Router>
      <div>
        <Switch>
          <Route exact path='/'/>
          <Route exact path="/resume" 
                render={()=>  <Resume/>  }/>
        </Switch>
      </div>
    </Router>
  </div>
)

export default IndexPage
