import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import img1 from '@/assets/images/about_img1.jpg';
import img2 from '@/assets/images/about_img2.jpg';
import '@/styles/home/about.scss';

function About() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about .capt',
        start: 'top center+=200',
      },
    });
    tl.from(
      '.about .capt',
      {
        autoAlpha: 0,
        y: 60,
        duration: 0.3,
      },
      '+=0.1'
    );
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.panel-img-top',
        start: 'top center+=200',
      },
    });
    tl1.from('.panel-img-top', {
      autoAlpha: 0,
      duration: 0.3,
      scale: 0.2,
      rotateY: 540,
    });
    tl1.from('.panel-desc-top', {
      autoAlpha: 0,
      duration: 0.3,
      x: '100vw',
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.panel-img-bottom',
        start: 'top center+=200',
      },
    });
    tl2.from('.panel-img-bottom', {
      autoAlpha: 0,
      duration: 0.3,
      scale: 0.2,
      rotateY: 540,
    });
    tl2.from('.panel-desc-bottom', {
      autoAlpha: 0,
      y: 40,
      duration: 0.3,
    });
  });
  return (
    <div className="about" id="about-us">
      <div className="container ">
        <div className="capt">
          We are a team of creators, doers and problem solvers.
        </div>
        <div className="span-panel">
          <div className="panel-img-top">
            <img className="image" src={img1} />
          </div>
          <div className="panel-desc-top">
            <div>
              <div className="title">About Us</div>
              <div className="desc">
                Big projects don’t require a big team. Devote Effort brings
                together the senior experience without the excess.
              </div>
            </div>
          </div>
          <div className="panel-img-bottom">
            <img className="image" src={img2} />
          </div>
          <div className="panel-desc-bottom row-wrap">
            <div className="desc">
              So you get the deep knowledge that comes with experience at places
              like Apple and Netflix, but a flat structure so the knowledge can
              be put into action more quickly.
              <button className="know-more">Know more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
