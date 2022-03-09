import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
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
      console.log(toggleMenu.current)
      console.log(e.target)
      //if (isToggled && toggleMenu.current.contains(e.target)) return
      //setToggle(false)
      window.removeEventListener('click', globalClick)
    }
    window.addEventListener('click', globalClick)
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [isToggled, toggleMenu])
  return (
    <div className="navigation">
      <div className="container container--flex container--flex__centered">
        <div className="logo-container">
          <Link className="logo" to="/">
            <img src={logo} className="nav-logo" alt="logo" />
          </Link>
        </div>
        {(isToggled || screenWidth > 1110) && (
          <ul
            className="menu"
            ref={(el) => {
              toggleMenu.current = el
            }}
          >
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
  )
}

export default Navbar
