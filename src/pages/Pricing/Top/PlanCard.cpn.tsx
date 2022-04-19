import '@/styles/pricing/card.scss';
function PlanCard({ plan, price, list, select }) {
  return (
    <div className={`card-container ${select && 'selected'}`}>
      <div className="card-plan">{plan}</div>
      <div className="card-title">Web/App Development</div>
      <div className="card-price">{price}</div>
      <div className="divider"></div>
      {list.map((item, index) => {
        return (
          <div key={index} className="card-item">
            {item}
          </div>
        );
      })}
      <div className="card-features">
        <button className="btn-arrow">Get Started</button>
      </div>
    </div>
  );
}

export default PlanCard;
