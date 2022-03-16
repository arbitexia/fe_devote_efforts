import React from 'react'
import ServiceCard from './service_card'
import designIcon from '../../../assets/images/design_icon.svg'
import devIcon from '../../../assets/images/development_icon.svg'
import seoIcon from '../../../assets/images/seo_icon.svg'
import '../../../styles/home/services.scss'

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
        <div className="grid-layout">
          <div className="caption wgs-2 wge-6 swgs-1 wg">
            We're a full-service software company.
          </div>
          <div className="description v-align wgs-6 wge-8 swgs-1 wg">
            <div className="service-title">Services</div>
            <div className="service-description">
              From refining your brand identify and running campaigns to
              powering your digital presence, we do it all.
            </div>
          </div>
          <div className="service-cards space-between row-wrap wgs-2 wge-8 swgs-1 wg">
            {cards.map((card, i) => {
              return (
                <ServiceCard
                  key={i}
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
