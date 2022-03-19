import { useEffect } from 'react';
import { gsap } from 'gsap';
import communicationLab from '@/assets/images/comlab_logo.png';
import hightech from '@/assets/images/htpkr_logo.png';
import fedex from '@/assets/images/fedex_logo.png';
import kssda from '@/assets/images/kssda_logo.png';
import inessoft from '@/assets/images/inessoft_logo.png';
import '@/styles/home/clients.scss';

interface ClientsItem {
  url: string;
  image: string;
}

const clientsList: ClientsItem[] = [
  {
    url: '',
    image: communicationLab,
  },
  {
    url: '',
    image: hightech,
  },
  {
    url: '',
    image: fedex,
  },
  {
    url: '',
    image: kssda,
  },
  {
    url: '',
    image: inessoft,
  },
];

function Clients() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.clients',
        start: 'top center+=200',
      },
    });
    tl.from(
      '.clients-content a',
      {
        autoAlpha: 0,
        duration: 0.3,
        stagger: 0.2,
        y: 40,
      },
      '+=0.1'
    );
  });
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-content">
          {clientsList.map((item, i) => {
            return (
              <a className="blur center" href={item.url} key={i}>
                <img src={item.image} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Clients;
