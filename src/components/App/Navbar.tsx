import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import weblogo from '@/assets/images/logo.svg';
import '@/styles/navbar.scss';

function Navbar() {
  const [isToggled, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleMenu = useRef(null);
  const toggleButton = useRef(null);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    const globalClick = (e) => {
      if (
        toggleMenu.current &&
        (toggleMenu.current.contains(e.target) ||
          toggleButton.current === e.target)
      )
        return;
      setToggle(false);
      document.removeEventListener('click', globalClick);
    };
    document.addEventListener('click', globalClick);
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, [isToggled, toggleMenu, toggleButton]);
  return (
    <div className="navigation">
      <div className="container space-between h-align sw-v-align">
        <div className="logo-container">
          <Link className="logo" to="/">
            <img src={weblogo} className="nav-logo anchor" alt="logo" />
          </Link>
        </div>
        {(isToggled || screenWidth > 911.99) && (
          <ul
            className="menu"
            ref={(el) => {
              toggleMenu.current = el;
            }}
          >
            <li>
              <Link className="anchor" to="/aboutus">
                About Us
              </Link>
            </li>
            <li>
              <Link className="anchor" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="anchor" to="/technologies">
                Technologies
              </Link>
            </li>
            <li>
              <Link className="anchor" to="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="anchor" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        )}

        <button
          className="dropdown"
          ref={(el) => {
            toggleButton.current = el;
          }}
          onClick={() => {
            setToggle(!isToggled);
          }}
        >
          Menu
        </button>
      </div>
    </div>
  );
}

export default Navbar;
