import React from 'react'
import ServiceCard from './serviceCard'
import '../../../styles/home/services.scss'
import ServiceCardItems from './serviceCardItem'

function Services() {
  return (
    <div className="services" id="services">
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
            {ServiceCardItems.map((card, i) => {
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
