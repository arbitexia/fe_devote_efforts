import React from 'react'
import avatar from '../../../assets/images/avatar.jpg'
import '../../../styles/home/ourclients.scss'

function OurClients() {
  return (
    <div className="ourclients">
      <div className="container">
        <div className="ourclients-top grid-layout">
          <div className="testimonial wgs-1 wge-4 swge-8 wg">
            <div className="title">Testimonial</div>
            <div className="desc">
              Don't just trust our word! See what a recent partner has to say
              about working with us.
            </div>
          </div>
          <div className="capt wgs-5 wge-9 swgs-1 swge-8 wg">
            Our clients speak
          </div>
        </div>
        <div className="ourclients-bottom grid-layout">
          <div className="avatar wgs-1 wge-4 wg swge-8">
            <img src={avatar} />
          </div>
          <div className="content  wgs-5 wge-8 swgs-1 swge-8 wg">
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
