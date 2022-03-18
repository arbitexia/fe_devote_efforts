import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ServiceCardItems from './ServiceCardItem';
import ServiceCard from './ServiceCard';
import '@/styles/home/services.scss';

function Services() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: 'top center+=200',
      },
    });
    tl.from('.services', { opacity: 0, duration: 0.5 });
    tl.from('.services .caption', { opacity: 0, y: 40, duration: 0.3 });
    tl.from('.services .description', { opacity: 0, y: 40, duration: 0.3 });
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.service-card',
        start: 'top center+=200',
      },
    });
    tl1.from('.services .service-card', {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.3,
    });
  });
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="grid-layout">
          <div className="caption wgs-2 wge-6 swg wg">
            We're a full-service software company.
          </div>
          <div className="description v-align wgs-6 wge-8 swg wg">
            <div className="service-title">Services</div>
            <div className="service-description">
              From refining your brand identify and running campaigns to
              powering your digital presence, we do it all.
            </div>
          </div>
          <div className="service-cards space-between row-wrap wgs-2 wge-8 swg wg">
            {ServiceCardItems.map((card, i) => {
              return (
                <ServiceCard
                  key={i}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
