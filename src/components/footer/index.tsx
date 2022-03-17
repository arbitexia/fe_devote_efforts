import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/footer.scss'

function Footer() {
  return (
    <footer className="footer" id="contact-us">
      <div className="container  h-align footer-top">
        <div className="footer-leftbar sw-12">
          <div className="footer-leftbar-together caption">
            Let's work together.
          </div>
          <div className="footer-leftbar-connect caption">Connect with us.</div>
          <div className="footer-leftbar-email-box caption">
            <input
              type="email"
              className="footer-leftbar-email-input"
              placeholder="Enter your email Address"
            />
            <p className="footer-leftbar-email-arrow">&#8594;</p>
          </div>
        </div>
        <div className="footer-rightbar sw-12">
          <ul className="w-6">
            <li className="footer-ul-header">Menu</li>
            <li>
              <Link className="ul-box" to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="ul-box" to="/">
                Services
              </Link>
            </li>
            <li>
              <Link className="ul-box" to="/">
                Our Projects
              </Link>
            </li>
            <li>
              <Link className="ul-box" to="/">
                Reviews
              </Link>
            </li>
            <li>
              <Link className="ul-box" to="/">
                Technologies
              </Link>
            </li>
          </ul>

          <ul className="w-6">
            <li className="footer-ul-header">Company</li>
            <li>
              <Link className="ul-box" to="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="ul-box" to="/">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="ul-box" to="/">
                Careers
              </Link>
            </li>
            <li>
              <Link className="ul-box" to="/">
                Teams
              </Link>
            </li>
            <li>
              <Link className="ul-box" to="/">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container  h-align footer-bottom">
        <div className="footer-leftbar sw-12">
          <ul>
            <li>© 2022 Devote Effort. All right reserved</li>
          </ul>
        </div>
        <div className="footer-rightbar sw-12">
          <ul>
            <div>
              <li>
                <Link to="/">Terms of Use</Link>
              </li>
              <li>
                <Link to="/">Cookie Policy</Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/">Sales and Refunds</Link>
              </li>
              <li>
                <Link to="/">Legal</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
