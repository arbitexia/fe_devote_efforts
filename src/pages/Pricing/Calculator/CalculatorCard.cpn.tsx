import { CardItemProps } from './types';
import '@/styles/pricing/calculatorCard.scss';

function CalculatorCard({ icon, title, selected }: CardItemProps) {
  return (
    <div className={`calculator-card anchor ${selected && 'selected'}`}>
      <div className="card-icon">
        <img src={icon} />
      </div>
      <div className="card-title">{title}</div>
    </div>
  );
}

export default CalculatorCard;
