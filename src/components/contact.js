import React from 'react'
import Portrait from '../images/Portrait.jpg'
import '../styles/contact.css'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import gmail from '../images/gmail.png'
import github from '../images/github.png'
import linkedIn from '../images/linkedIn.png'
import resumeIcon from '../images/resumeIcon.png'

const Contact = props => (
    <div className="contact">
    <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>

    </Helmet>
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
                        src={resumeIcon}></img>
                </Link>
                <a  target="_blank"
                    href="https://www.linkedin.com/in/matthieu-bourgois/">
                    <img className="icons"
                        src={linkedIn}></img>
                </a>
                <a  target="_blank"
                    href="https://github.com/humblefeet">
                    <img className="icons"
                        src={github}></img>
                </a>
                <a  target="_blank"
                    href="mailto:matthieu.bourgois89@gmail.com"
                    >
                    <img className="icons"
                        src={gmail}></img>
                </a>
            </div>
        </div>
    </div>
)

export default Contact