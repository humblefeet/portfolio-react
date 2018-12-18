import React from 'react'
import hikeHitch from '../images/hikeHitch.png'
import rainOrShine from '../images/rainOrShine.png'
import unscrambler from '../images/unscrambler.png'
import whatch from '../images/whatch.png'
import '../styles/projects.css'

const Projects = props =>(
    <div className="projects">

        <h1 className="big">Some of my recent developments...</h1>

        <div className="grid-container">
            <div className="module whatch">
                <a  target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ladystensberg/whatch">
                    <img className="images " src={whatch} alt="whatch screenshot"></img>
                </a>
            </div>
            <div className="module hike">
                <a  target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/humblefeet/hike-hitch">
                    <img className="images " src={hikeHitch} alt="Hike Hitch screenshot"></img>
                </a>
            </div>
            <div className="module rain">
                <a  target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/humblefeet/rain-or-shine"> 
                    <img className="images " src={rainOrShine} alt="Rain or Shine screenshot"></img>
                </a>
            </div>
            <div className="module word">
                <a  target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/humblefeet/Word-Scramble">
                    <img className="images " src={unscrambler} alt="unscrambler screenshot"></img>
                </a>
            </div>
        </div>
    </div>

)

export default Projects