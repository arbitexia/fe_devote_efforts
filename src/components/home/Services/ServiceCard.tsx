import React from 'react';
import { ServiceCardItem } from './ServiceCardItem';
import '@/styles/home/serviceCard.scss';

function ServiceCard({ icon, title, description }: ServiceCardItem) {
  return (
    <div className="service-card">
      <div className="card-icon">
        <img src={icon} />
      </div>
      <div className="card-title">{title}</div>
      <div className="card-description other">{description}</div>
    </div>
  );
}

export default ServiceCard;
