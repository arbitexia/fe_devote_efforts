import React from 'react'
import '../../../styles/home/service_card.scss'

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <div className="card-icon">
        <img src={icon} />
      </div>
      <div className="card-title">{title}</div>
      <div className="card-description other">{description}</div>
    </div>
  )
}

export default ServiceCard
