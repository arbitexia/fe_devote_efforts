import { useEffect } from 'react';
import { gsap } from 'gsap';
import '@/styles/home/success.scss';

function SuccessfulStory() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.success .why',
        start: 'top center+=200',
      },
    });
    tl.from(
      '.success .why',
      {
        autoAlpha: 0,
        y: 40,
        duration: 0.3,
      },
      '+=0.1'
    );
    tl.from('.success .unsure', {
      autoAlpha: 0,
      y: 40,
      duration: 0.3,
    });
    tl.from(
      '.success-right .desc',
      {
        autoAlpha: 0,
        y: 40,
        duration: 0.3,
      },
      '+=0.5'
    );
    tl.from('.success .pricing', {
      autoAlpha: 0,
      duration: 0.3,
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.success .story',
        start: 'top center+=200',
      },
    });
    tl2.from('.success .story', {
      autoAlpha: 0,
      y: 40,
      stagger: 0.3,
      duration: 0.3,
    });
  });
  return (
    <div className="success">
      <div className="container ">
        <div className="grid-layout">
          <div className="success-left wgs-2 wge-6 swg wg">
            <div className="why">Why us</div>
            <div className="unsure">Still unsure?</div>
          </div>
          <div className="success-right wgs-6 wge-9 swg wg">
            <div className="desc">
              Here are 3 reasons you should partner with us!
            </div>
            <div className="pricing">
              <button>Pricing</button>
            </div>
          </div>
        </div>
        <div className="grid-layout">
          <div className="stories row-wrap space-between wgs-2 wge-8 swg wg">
            <div className="story blur top">
              <div className="eval">7+</div>
              <div className="title">Years of Experience</div>
              <div className="desc">
                We've had quite a run in our 7+ years of operation with
                successful project launches across Europe and dozens of viral
                campaigns.
              </div>
            </div>
            <div className="story blur">
              <div className="eval">32+</div>
              <div className="title">Clients contacted again</div>
              <div className="desc">
                Over half our clients stay with us for longer than a single
                project. Over half our clients stay with us for longer than a
                single project.
              </div>
            </div>
            <div className="story blur">
              <div className="eval">87+</div>
              <div className="title">Completed projects</div>
              <div className="desc">
                We may be young but our agency has already won 13 Excellence
                Awards for our work. Over half our clients stay with us for
                longer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessfulStory;
