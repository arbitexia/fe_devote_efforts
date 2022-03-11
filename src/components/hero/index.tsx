import React from 'react'
import '../../styles/hero.scss'
import iconInstagram from '../../assets/images/Instagram.svg'
import iconTwitter from '../../assets/images/Twitter.svg'
import iconYoutube from '../../assets/images/Youtube.svg'

function Hero() {
  return (
    <section className="hero">
      <div className="container container-sw">
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
            <a
              href="http://instagram.com/devoteeffort"
              className="generic-anchor"
            >
              <img src={iconInstagram} />
            </a>
            <a
              href="http://twitter.com/devoteeffort"
              className="generic-anchor"
            >
              <img src={iconTwitter} />
            </a>
            <a
              href="http://youtube.com/devoteeffort"
              className="generic-anchor"
            >
              <img src={iconYoutube} />
            </a>
          </div>
          <div className="hero-features">
            <button className="pricing">Pricing</button>
            <button className="about">About Us</button>
          </div>
        </div>
      </div>
      <div className="hero-img"></div>
    </section>
  )
}

export default Hero
