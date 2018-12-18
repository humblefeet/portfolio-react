import React, { Component } from 'react';
import './App.css';
import Intro from './components/intro'
import Projects from './components/projects'
import Welcome from './components/welcome'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <div className="App-logo">
            <Welcome/>
          </div>
          <Intro/>
          <Projects/>
        </div>
        <Contact/>
      </div>
    );
  }
}

export default App;
