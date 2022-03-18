import React from 'react';
import { Link } from 'react-router-dom';
import '@/styles/footer.scss';

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
            <button className="footer-leftbar-email-arrow caption">
              &#8594;
            </button>
          </div>
        </div>
        <div className="footer-rightbar sw-12">
          <ul className="w-6">
            <li className="footer-ul-header">Menu</li>
            <li>
              <Link className="ul-box anchor" to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="ul-box anchor" to="/">
                Services
              </Link>
            </li>
            <li>
              <Link className="ul-box anchor" to="/">
                Our Projects
              </Link>
            </li>
            <li>
              <Link className="ul-box anchor" to="/">
                Reviews
              </Link>
            </li>
            <li>
              <Link className="ul-box anchor" to="/">
                Technologies
              </Link>
            </li>
          </ul>

          <ul className="w-6">
            <li className="footer-ul-header">Company</li>
            <li>
              <Link className="ul-box anchor" to="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="ul-box anchor" to="/">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="ul-box anchor" to="/">
                Careers
              </Link>
            </li>
            <li>
              <Link className="ul-box anchor" to="/">
                Teams
              </Link>
            </li>
            <li>
              <Link className="ul-box anchor" to="/">
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
                <Link className="anchor" to="/">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link className="anchor" to="/">
                  Cookie Policy
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link className="anchor" to="/">
                  Sales and Refunds
                </Link>
              </li>
              <li>
                <Link className="anchor" to="/">
                  Legal
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
