import '@/styles/pricing/top.scss';

function PricingTop() {
  return (
    <section className="top">
      <div className="container">
        <div className="grid-layout">
          <div className="top-caption wgs-2 wge-7 swg wg">
            We work with all kinds of budgets.
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
      </div>
    </section>
  );
}

export default PricingTop;
