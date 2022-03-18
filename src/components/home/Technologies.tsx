import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import iconVue from '../../assets/images/vue_icon.svg'
import iconReact from '../../assets/images/react_icon.svg'
import iconAngular from '../../assets/images/angular_icon.svg'
import iconDjango from '../../assets/images/django_icon.svg'
import iconNode from '../../assets/images/node_icon.svg'
import iconGoogle from '../../assets/images/google_icon.svg'
import iconAws from '../../assets/images/aws_icon.svg'
import iconRails from '../../assets/images/rails_icon.svg'
import '../../styles/home/technologies.scss'

interface TechnologyItem {
  url: string
  image: string
}

const techList: TechnologyItem[] = [
  {
    url: '/',
    image: iconVue,
  },
  {
    url: '/',
    image: iconReact,
  },
  {
    url: '/',
    image: iconAngular,
  },
  {
    url: '/',
    image: iconDjango,
  },
  {
    url: '/',
    image: iconNode,
  },
  {
    url: '/',
    image: iconGoogle,
  },
  {
    url: '/',
    image: iconAws,
  },
  {
    url: '/',
    image: iconRails,
  },
]

function Technologies() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.technologies .capt',
        start: 'top center+=200',
      },
    })
    tl.from(
      '.technologies .capt,.technologies .desc',
      {
        autoAlpha: 0,
        duration: 1,
        y: 40,
      },
      '+=0.1'
    )
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.tech-item',
        start: 'top center+=200',
      },
    })
    tl1.from(
      '.tech-item',
      {
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.5,
        x: '100vw',
      },
      '+=0.1'
    )
  })
  return (
    <div className="technologies" id="technologies">
      <div className="container">
        <div className="capt">Technologies</div>
        <div className="desc">
          We will find the best solution for you, let’s cooperate with us
        </div>
        <div className="technologies-content">
          {techList.map((item, i) => {
            return (
              <a className="tech-item" href={item.url} key={i}>
                <img className="anchor" src={item.image} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Technologies
