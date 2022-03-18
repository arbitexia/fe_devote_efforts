import { useEffect } from 'react';
import { gsap } from 'gsap';
import Gallery from './Gallery';
import GalleryItem from './GalleryItem';
import '@/styles/home/ourProject.scss';

function OurProject() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.project-top',
        start: 'top center+=200',
      },
    });
    tl.from(
      '.project-top',
      {
        autoAlpha: 0,
        duration: 1,
        y: 40,
      },
      '+=0.1'
    );
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.gallery-desc',
        start: 'top center+=200',
      },
    });
    tl1.fromTo(
      '.gallery-desc',
      {
        clipPath: 'inset(0 100% 0 0)',
        webClipPath: 'inset(0 100% 0 0)',
      },
      {
        clipPath: 'inset(0 0% 0 0)',
        webClipPath: 'inset(0 0% 0 0)',
        duration: 0.6,
      }
    );
  });
  return (
    <div className="ourproject">
      <div className="container">
        <div className="project-top grid-layout">
          <div className="top wgs-1 wge-3 swg wg">
            <div className="capt">Our Projects</div>
            <div className="desc">
              We will find the best solution for you, let’s cooperate with us
            </div>
          </div>
          <div className="title wgs-5 wge-9 swg wg">
            Some of our
            <br />
            favorite projects.
          </div>
        </div>
        <div className="gallery grid-layout">
          {GalleryItem.map((project, i) => {
            return (
              <Gallery
                key={i}
                image={project.image}
                url={project.url}
                title={project.title}
                description={project.description}
              />
            );
          })}
          <div className="gallery-desc row-wrap wgs-5 wge-9 swg wg">
            <div className="v-align">
              We love projects that challenge us and force us to think out of
              the box. We'll never do work that's generic or follow trends
              blindly. We’re passionate about thoughtful projects that tell a
              story.
              <button className="gallery-view">View All Projects</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProject;
