import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import '../styles/Header.css'
import Helmet from 'react-helmet'

const Header = ({ siteTitle }) => (
  <div className="main">
  <Helmet>
    <link href="https://fonts.googleapis.com/css?family=Catamaran" rel="stylesheet"/>
  </Helmet>
    <div className="inner">
        <Link to="/" >
          <h1 className="title big">
            Matthieu Bourgois
          </h1>
        </Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
