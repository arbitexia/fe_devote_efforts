import '@/styles/pricing/question.scss';

const listData = [
  {
    title: 'What setors do you specialie in?',
    description:
      'The process of product creation and development never ends completely. We are not disposable; We believe that convenience plays a constant role in customer relationships. Whether your industry is healthcare, fintech, SAAS, consumer products, media, crypto, hospitality, B2B services, sports or e-commerce, our work combines strategy and creativity, but not in a vacuum. Our success is based on a strategic creative vision: driven by a focused, curatorial team.',
  },
  {
    title: 'What setors do you specialie in?',
    description:
      'The process of product creation and development never ends completely. We are not disposable; We believe that convenience plays a constant role in customer relationships. Whether your industry is healthcare, fintech, SAAS, consumer products, media, crypto, hospitality, B2B services, sports or e-commerce, our work combines strategy and creativity, but not in a vacuum. Our success is based on a strategic creative vision: driven by a focused, curatorial team.',
  },
  {
    title: 'What setors do you specialie in?',
    description:
      'The process of product creation and development never ends completely. We are not disposable; We believe that convenience plays a constant role in customer relationships. Whether your industry is healthcare, fintech, SAAS, consumer products, media, crypto, hospitality, B2B services, sports or e-commerce, our work combines strategy and creativity, but not in a vacuum. Our success is based on a strategic creative vision: driven by a focused, curatorial team.',
  },
  {
    title: 'What setors do you specialie in?',
    description:
      'The process of product creation and development never ends completely. We are not disposable; We believe that convenience plays a constant role in customer relationships. Whether your industry is healthcare, fintech, SAAS, consumer products, media, crypto, hospitality, B2B services, sports or e-commerce, our work combines strategy and creativity, but not in a vacuum. Our success is based on a strategic creative vision: driven by a focused, curatorial team.',
  },
];

function Questions() {
  return (
    <section className="question">
      <div className="container">
        <div className="grid-layout">
          <div className="question-caption wgs-2 wge-8 swg wg">
            <h2>Still unsure about something?</h2>
            <div className="business">Frequently asked questions</div>
          </div>
          <div className="list wgs-2 wge-8 swg wg">
            <ul>
              {listData.map((item, index) => {
                return (
                  <li>
                    <input type="checkbox" id={`list-item-${index}`} />
                    <div className="header">
                      {item.title}
                      <label
                        className="plus anchor"
                        htmlFor={`list-item-${index}`}
                      >
                        +
                      </label>
                      <label
                        className="minus anchor"
                        htmlFor={`list-item-${index}`}
                      >
                        -
                      </label>
                    </div>
                    <ul>
                      <li>
                        <div className="description">{item.description}</div>
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
