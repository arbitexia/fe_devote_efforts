import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '@/styles/home/gallery.scss';
import { GalleryItem } from './GalleryItem';
import { gsap } from 'gsap';

function Gallery({ image, url, title, description }: GalleryItem) {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  useEffect(() => {
    revealRefs.current.forEach((el) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top center+=200',
        },
      });
      tl.fromTo(
        el,
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
  }, []);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return (
    <div
      className="clipped swg"
      style={{ backgroundImage: `url(${image})` }}
      ref={addToRefs}
    >
      <Link to={url}>
        <div className="mask">
          <div className="title">{title}</div>
          <div className="desc">{description}</div>
        </div>
      </Link>
    </div>
  );
}

export default Gallery;
