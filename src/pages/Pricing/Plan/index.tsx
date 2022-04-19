import Card from './PlanCard.cpn';
import '@/styles/pricing/plan.scss';

const cardList = [
  {
    plan: 'Basic',
    price: '$5000+',
    list: [
      'Regular updates',
      'Responsive interface',
      'Code maintenance',
      'Tech Support up to 1 year',
      'Ready in 30 - 60 Days',
      'Project files included',
    ],
    selected: false,
  },
  {
    plan: 'Custom',
    price: '$10000+',
    list: [
      'Regular updates',
      'Responsive interface',
      'Code maintenance',
      'Tech Support up to 1 year',
      'Ready in 30 - 60 Days',
      'Project files included',
      'Ready in 30 - 60 Days',
    ],
    selected: true,
  },
  {
    plan: 'Technical',
    price: '$15000+',
    list: [
      'Regular updates',
      'Responsive interface',
      'Code maintenance',
      'Tech Support up to 1 year',
      'Ready in 30 - 60 Days',
      'Project files included',
    ],
    selected: false,
  },
];
function TopPlan() {
  return (
    <section className="plan">
      <div className="container">
        <div className="grid-layout">
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
export default TopPlan;
