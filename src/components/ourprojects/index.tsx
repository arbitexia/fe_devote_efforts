import React from 'react'
import project1 from '../../assets/images/project-1.png'
import project2 from '../../assets/images/project-2.png'
import project3 from '../../assets/images/project-3.png'
import project4 from '../../assets/images/project-4.png'
import Gallery from '../gallery'
import '../../styles/ourproject.scss'

const projects = [
  {
    image: project1,
    url: '',
    title: 'Chakra',
    description: 'Website, Development',
  },
  {
    image: project2,
    url: '',
    title: 'Goldie',
    description: 'Website, Development',
  },
  {
    image: project3,
    url: '',
    title: 'NFT App Design',
    description: 'Website, Nft, Design',
  },
  {
    image: project4,
    url: '',
    title: 'Petronas Tower',
    description: 'Website, Development',
  },
  {
    image: project1,
    url: '',
    title: 'Chakra',
    description: 'Website, Development',
  },
]

function OurProject() {
  return (
    <div className="ourproject">
      <div className="container container-sw">
        <div className="ourproject-top">
          <div>
            <div className="capt">Our Projects</div>
            <div className="desc">
              We will find the best solution for you, let’s cooperate with us
            </div>
          </div>
          <div className="title">Some of our favorite projects.</div>
        </div>
        <div className="gallery">
          {projects.map((project) => {
            return <Gallery item={project} />
          })}
          <div className="gallery-desc">
            <div>
              <div>
                We love projects that challenge us and force us to think out of
                the box. We'll never do work that's generic or follow trends
                blindly. We’re passionate about thoughtful projects that tell a
                story.
              </div>
              <button className="gallery-view">View All Projects</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProject
