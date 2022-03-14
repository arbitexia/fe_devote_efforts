import React from 'react'
import project1 from '../../assets/images/project-1.png'
import project2 from '../../assets/images/project-2.png'
import '../../styles/ourproject.scss'

function OurProject() {
  return (
    <div className="ourproject">
      <div className="container container-sw">
        <div>
          <div>Our Projects</div>
          <div>
            We will find the best solution for you, let’s cooperate with us
          </div>
        </div>
        <div>Some of our favorite projects.</div>
        <div className="gallery">
          <div className="clipped">
            <a target="_blank" href="img_mountains.jpg">
              <img src={project1} alt="Mountains" />
            </a>
            <div className="mask">
              <div className="title">Title</div>
              <div className="desc">Add a description of the image here</div>
            </div>
          </div>
          <div className="clipped">
            <a target="_blank" href="img_mountains.jpg">
              <img src={project2} alt="Mountains" />
            </a>
            <div className="mask">
              <div className="title">Title</div>
              <div className="desc">Add a description of the image here</div>
            </div>
          </div>
        </div>
        <div>
          We love projects that challenge us and force us to think out of the
          box. We'll never do work that's generic or follow trends blindly.
          We’re passionate about thoughtful projects that tell a story.
        </div>
        <button>View All Projects</button>
      </div>
    </div>
  )
}

export default OurProject
