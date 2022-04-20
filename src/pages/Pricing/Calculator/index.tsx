import '@/styles/pricing/calculator.scss';
import { useState } from 'react';
import CalculatorCard from './CalculatorCard.cpn';
import { mobileData } from './mock-data';
import { totalData } from './mock-data';

// const mobilePageNum = 11;
const webPageNum = 11;

function Calculator() {
  const [price, setPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalShow, setTotalShow] = useState(false);
  const pageNum = webPageNum;
  const pageData = mobileData;

  const cardClick = (e, p, index) => {
    if (e.target.className.includes('selected')) {
      pageData[currentPage - 1].data[p].datas[index].selected = false;
      setPrice(price - pageData[currentPage - 1].data[p].datas[index].price);
      e.target.classList.remove('selected');
    } else {
      setPrice(price + pageData[currentPage - 1].data[p].datas[index].price);
      pageData[currentPage - 1].data[p].datas[index].selected = true;
      e.target.classList.add('selected');
    }
  };
  return (
    <section className="calculator">
      <div className="container">
        <div className="section-header">
          <h2>Calculate the cost individually for your project</h2>
        </div>
        {!totalShow ? (
          <div className="grid-layout">
            <div className="work-flow-total wgs-2 wge-8 swg wg">
              <h2>
                ${price} <span> total</span>
              </h2>
            </div>
            <div className="work-flow-caption wgs-2 wge-5 swg wg">
              {pageData[currentPage - 1].page}\{pageNum}
            </div>
            {pageData[currentPage - 1].data.map((page, i) => {
              return (
                <>
                  <div
                    key={i}
                    className={`work-flow-title wgs-2 wge-${
                      page.description ? 5 : 8
                    } swg wg`}
                  >
                    {page.title}
                  </div>
                  <div
                    className={`work-flow-description wgs-${
                      page.description ? 5 : 8
                    } wge-8 swg wg`}
                  >
                    {page.description}
                  </div>
                  <div className="calculator-content wgs-2 wge-8 swg wg">
                    {page.datas.map((item, index) => {
                      return (
                        <>
                          {item.type === 'card' ? (
                            <div
                              key={index}
                              className={page.width}
                              onClick={(e) => cardClick(e, i, index)}
                            >
                              <CalculatorCard
                                icon={item.icon}
                                title={item.text}
                                selected={item.selected}
                              />
                            </div>
                          ) : (
                            <label
                              className={`form-control anchor ${page.width}`}
                              key={index}
                            >
                              <input
                                type="checkbox"
                                checked={item.selected}
                                onChange={(e) => cardClick(e, i, index)}
                              />
                              {item.text}
                            </label>
                          )}
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <div className="grid-layout">
            <div className="wgs-2 wge-8 swg wg">
              <div className="total-cost-price flex-center">
                <h2>
                  <span>Total cost:</span> ${price}
                </h2>
              </div>
              <div className="work-flow-description flex-center">
                Please make sure this information is correct before submitting
                your request.
              </div>
              <div>
                <table className="total-cost-table">
                  <tbody>
                    {totalData.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="total-table-type">{item.type}</td>
                          <td className="total-table-title">{item.title}</td>
                          <td className="total-table-title">{item.price}</td>
                          <td className="total-table-type">{item.time}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex-end work-flow-total">
                <h2>
                  ${price} <span> total</span>
                </h2>
              </div>
              <div className="flex-end">
                <div className="total-cost-notice">
                  Please, do not forget, that additional features might increase
                  general scope of work, and project estimation.
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="grid-layout">
          <div className="features wgs-2 wge-8 swg wg">
            <button
              className="prev"
              onClick={() => {
                if (totalShow) setTotalShow(false);
                if (currentPage >= 2 && !totalShow)
                  setCurrentPage(currentPage - 1);
              }}
            >
              Prev
            </button>
            <button
              className="next"
              onClick={() => {
                if (currentPage == pageNum) setTotalShow(true);
                if (currentPage < pageNum) setCurrentPage(currentPage + 1);
              }}
            >
              {totalShow
                ? 'Contact us'
                : currentPage === pageNum
                ? 'Total cost'
                : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
