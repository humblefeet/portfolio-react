import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";

import Portrait from '../images/portrait.jpg'
import '../styles/contact.css'
import gmail from '../images/gmail.png'
import github from '../images/github.png'
import linkedIn from '../images/linkedin.png'
import resumeIcon from '../images/resumeIcon.png'

const Contact = props => (
    <div className="contact">
        <div className="innerContact">
            <h1 className="big">Contact</h1>
            <img 
                alt="portrait"
                className="portrait"
                src={Portrait}>
            </img>
            <div className="lowContact">
                <Link to='/resume'>
                    <img className="icons"
                        target="_blank"
                        src={resumeIcon}
                        alt="resume icon"></img>
                </Link>
                <a  href="https://www.linkedin.com/in/matthieu-bourgois/">
                    <img className="icons"
                        target="_blank"
                        src={linkedIn}
                        alt="linkedIn Icon"></img>
                </a>
                <a  href="https://github.com/humblefeet">
                    <img className="icons"
                        target="_blank"
                        src={github}
                        alt="github icon"></img>
                </a>
                <a  href="mailto:matthieu.bourgois89@gmail.com">
                    <img className="icons"
                        target="_blank"
                        src={gmail}
                        alt="gmail icon"></img>
                </a>
            </div>
        </div>
    </div>
)

export default Contact