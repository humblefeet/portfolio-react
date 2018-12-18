import React, { Component } from 'react';
import './App.css';
import Intro from './components/intro'
import Projects from './components/projects'
import Welcome from './components/welcome'
import Contact from './components/contact'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <Header/>
          <Welcome/>
          <Intro/>
          <Projects/>
        </div>
        <Contact/>
      </div>
    );
  }
}

export default App;
