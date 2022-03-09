import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import '../../styles/navbar.scss'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="navigation">
      <div className="container container--flex container--flex__centered">
        <div className="logo-container">
          <Link className="logo" to="/">
            <img src={logo} className="nav-logo" alt="logo" />
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
        <button
          className="dropdown"
          onClick={() => {
            setToggleMenu(!toggleMenu)
          }}
        >
          Menu
        </button>
      </div>
    </div>
  )
}

export default Navbar
