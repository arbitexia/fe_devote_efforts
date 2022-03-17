import React from 'react'
import img1 from '../../assets/images/about_img1.jpg'
import img2 from '../../assets/images/about_img2.jpg'
import '../../styles/home/about.scss'

function About() {
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
  )
}

export default About
