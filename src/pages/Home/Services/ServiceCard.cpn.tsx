import { ServiceCardItemProps } from './types';
import '@/styles/home/serviceCard.scss';

function ServiceCard({ icon, title, description }: ServiceCardItemProps) {
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
