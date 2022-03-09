import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import weblogo from '../../assets/images/logo.svg'
import '../../styles/navbar.scss'

function Navbar() {
  const [isToggled, setToggle] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleMenu = useRef(null)
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    const globalClick = (e) => {
      if (toggleMenu.current && toggleMenu.current.contains(e.target)) return
      setToggle(false)
      document.removeEventListener('click', globalClick)
    }
    document.addEventListener('click', globalClick)
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [isToggled, toggleMenu])
  return (
    <div className="navigation">
      <div className="container">
        <div className="logo-container">
          <Link className="logo" to="/">
            <img src={weblogo} className="nav-logo" alt="logo" />
          </Link>
        </div>
        <div
          ref={(el) => {
            toggleMenu.current = el
          }}
        >
          {(isToggled || screenWidth > 768) && (
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
          )}

          <button
            className="dropdown"
            onClick={() => {
              setToggle(!isToggled)
            }}
          >
            Menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
