import '@/styles/pricing/question.scss';
import { listData } from './mock-data';

function Questions() {
  return (
    <section className="question">
      <div className="container">
        <div className="grid-layout">
          <div className="question-caption wgs-2 wge-8 swg wg">
            <h2>Still unsure about something?</h2>
            <span>Frequently asked questions</span>
          </div>
          <div className="list wgs-2 wge-8 swg wg">
            <ul>
              {listData.map((item, index) => {
                return (
                  <li key={index}>
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
