import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo'
import '../../styles/navbar.scss'

function Navbar() {
  return (
    <div className="navigation">
      <div className="container container--flex container--flex__centered">
        <div className="logo-container">
          <Link className="logo" to="/">
            <Logo />
          </Link>
        </div>
        <ul className="menu">
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/technologies">Technologies</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
