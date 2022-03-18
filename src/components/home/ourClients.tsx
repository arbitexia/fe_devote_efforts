import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import avatar from '../../assets/images/avatar.jpg'
import '../../styles/home/ourClients.scss'

function OurClients() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.ourclients .testimonial',
        start: 'top center+=200',
      },
    })
    tl.from(
      '.ourclients .testimonial',
      {
        autoAlpha: 0,
        y: 40,
        duration: 1,
      },
      '+=0.1'
    )
    tl.from('.ourclients .avatar-l', {
      autoAlpha: 0,
      y: 40,
      duration: 1,
    })
    tl.from('.ourclients .capt', {
      autoAlpha: 0,
      y: 40,
      duration: 1,
    })
    tl.from('.ourclients-bottom .desc', {
      autoAlpha: 0,
      y: 40,
      duration: 1,
    })
    tl.from('.ourclients .client', {
      autoAlpha: 0,
      y: 40,
      duration: 1,
    })
    tl.from('.ourclients .features', {
      autoAlpha: 0,
      y: 40,
      duration: 1,
    })
  })
  return (
    <div className="ourclients">
      <div className="container">
        <div className="ourclients-top grid-layout">
          <div className="testimonial wgs-1 wge-4 swg wg">
            <div className="title">Testimonial</div>
            <div className="desc">
              Don't just trust our word! See what a recent partner has to say
              about working with us.
            </div>
          </div>
          <div className="capt wgs-5 wge-9 swg wg">Our clients speak</div>
        </div>
        <div className="ourclients-bottom grid-layout">
          <div className="avatar-l wgs-1 wge-4 wg ">
            <img src={avatar} />
          </div>
          <div className="content  wgs-5 wge-8 swg wg">
            <div className="desc">
              <span>“</span>Devote Effort did such a fab job on the campaign
              site for our Fall-Winter 2021 Wedding Collection, we can't wait to
              work with them again! Devote Effort did such a fab job on the
              campaign site for our Fall-Winter 2021 Wedding Collection, we
              can't wait to work with them again!
            </div>
            <div className="client">
              <div className="avatar">
                <img src={avatar} />
              </div>
              <div className="info">
                <div className="name">Henry Paddington</div>
                <div className="job">TextLab CEO</div>
              </div>
            </div>
            <div className="features">
              <button className="prev">Prev</button>
              <button className="next">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurClients
