import Card from './PlanCard.cpn';
import '@/styles/pricing/top.scss';
import { cardList } from './mock-data';

function PricingTop() {
  return (
    <section className="top">
      <div className="container">
        <div className="grid-layout">
          <div className="top-caption wgs-2 wge-7 swg wg">
            <h2>We work with all kinds of budgets.</h2>
          </div>
        </div>
        <div className="grid-layout">
          <div className="top-description wgs-5 wge-8 swg wg">
            <div className="title">Pricing</div>
            <div className="description">
              We'll never push extras that don't make sense for your brand just
              to make a quick buck. Our pricing policy is as transparent as our
              process.
            </div>
          </div>
        </div>
        <div className="plan grid-layout">
          {cardList.map((item, index) => {
            return (
              <div
                key={index}
                className={`plan-card wgs-${index * 2 + 1} wge-${
                  index * 2 + 3
                } swg wg`}
              >
                <Card
                  plan={item.plan}
                  price={item.price}
                  list={item.list}
                  select={item.selected}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingTop;
