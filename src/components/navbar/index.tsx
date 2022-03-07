import React from 'react'
import logo from '../../assets/logo.svg'
import '../../styles/navbar.scss'
// import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navigation">
      <div className="container container--flex container--flex__centered">
        <div className="logo-container">
          <a className="logo" href="/">
            <img src={logo} />
            {/* <Logo /> */}
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Technologies</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
