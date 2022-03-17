import React from 'react'
import '../../styles/home/hero.scss'
import iconInstagram from '../../assets/images/Instagram.svg'
import iconTwitter from '../../assets/images/Twitter.svg'
import iconYoutube from '../../assets/images/Youtube.svg'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="grid-layout">
          <div className="hero-caption wgs-2 wge-7 swg wg">
            <span className="section-line">
              “We make great ideas come to life.”
            </span>
            <h2>
              An extra mile for your <span className="business">business</span>
            </h2>
          </div>
        </div>
        <div className="grid-layout">
          <div className="hero-social-links column-wrap flex-end wgs-1 wge-2 hgs-1 hge-3 wg hg">
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
          <div className="hero-description wgs-5 wge-8 swg wg">
            We’ve been delivering commercially successful products for nearly a
            decade and we are aware of the importance not only of making but of
            launching a product
          </div>

          <div className="hero-features  wgs-5 wge-8 swg wg">
            <button className="pricing btn-arrow">Pricing</button>
            <button className="about btn-arrow">About Us</button>
          </div>
        </div>
      </div>
      <div className="hero-img"></div>
    </section>
  )
}

export default Hero
