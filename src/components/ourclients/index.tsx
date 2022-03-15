import React from 'react'
import avatar from '../../assets/images/avatar.jpg'
import '../../styles/ourclients.scss'

function OurClients() {
  return (
    <div className="ourclients">
      <div className="container container-sw">
        <div className="ourclients-top row">
          <div className="testimonial">
            <div className="title">Testimonial</div>
            <div className="desc">
              Don't just trust our word! See what a recent partner has to say
              about working with us.
            </div>
          </div>
          <div className="capt">Our clients speak</div>
        </div>
        <div className="ourclients-bottom row">
          <div className="avatar">
            <img src={avatar} />
          </div>
          <div className="content">
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
