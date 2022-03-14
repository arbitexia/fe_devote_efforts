import React from 'react'
import ServiceCard from '../servicecard'
import designIcon from '../../assets/images/design_icon.svg'
import devIcon from '../../assets/images/development_icon.svg'
import seoIcon from '../../assets/images/seo_icon.svg'
import '../../styles/services.scss'

const cards = [
  {
    icon: designIcon,
    title: 'Design',
    description: 'Logo revamps, updated branding, creating digital assets',
  },
  {
    icon: devIcon,
    title: 'Development',
    description:
      'Website revamps, app building, platform migration, setting up tracking & analytics',
  },
  {
    icon: seoIcon,
    title: 'SEO',
    description: 'Website revamps, app building, platform migration, setting',
  },
]

function Services() {
  return (
    <div className="services">
      <div className="container container-sw">
        <div className="services-content">
          <div className="caption">We're a full-service software company.</div>
          <div className="description">
            <div className="service-title">Services</div>
            <div className="service-description">
              From refining your brand identify and running campaigns to
              powering your digital presence, we do it all.
            </div>
          </div>
          <div className="service-cards">
            {cards.map((card) => {
              return (
                <ServiceCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
