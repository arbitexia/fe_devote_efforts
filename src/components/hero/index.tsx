import React from 'react'
import { Link } from 'react-router-dom'
import smartworks from '../../assets/images/smartworks.png'
import '../../styles/hero.scss'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-caption">
            <span className="section-line">
              "We make great ideas come to life."
            </span>
            <h2>
              An extra mile for your <span className="business">business</span>
            </h2>
          </div>
          <div className="hero-description">
            We’ve been delivering commercially successful products for nearly a
            decade and we are aware of the importance not only of making but of
            launching a product
          </div>
          <div className="hero-social-links">
            <Link
              to="http://instagram.com/devoteeffort"
              className="generic-anchor"
            >
              <i className="fa fa-instagram"></i>
            </Link>
            <Link
              to="http://instagram.com/devoteeffort"
              className="generic-anchor"
            >
              <i className="fa fa-instagram"></i>
            </Link>
            <Link
              to="http://instagram.com/devoteeffort"
              className="generic-anchor"
            >
              <i className="fa fa-instagram"></i>
            </Link>
          </div>
          <div className="hero-features">
            <button className="pricing">Pricing</button>
            <button className="about">About Us</button>
          </div>
        </div>
        <div className="hero-img">
          <img src={smartworks} />
        </div>
      </div>
    </section>
  )
}

export default Hero
