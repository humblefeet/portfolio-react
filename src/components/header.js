import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import '../styles/Header.css'

const Header = ({ siteTitle }) => (
  <div className="main">

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
