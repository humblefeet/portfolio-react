import React from 'react'
import Helmet from 'react-helmet'

// import Header from '../components/header'
import '../styles/welcome.css'

const Welcome =()=>(
    <div className="welcomePage">
        <div className="welcomeMessage">
            <div className="designName">
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Major+Mono+Display" rel="stylesheet"></link>
            </Helmet>
                <h1 className="swing">
                    MB
                </h1>
            </div>

        </div>
    </div>
)

export default Welcome