import React from 'react'
import iconVue from '../../assets/images/vue_icon.svg'
import iconReact from '../../assets/images/react_icon.svg'
import iconAngular from '../../assets/images/angular_icon.svg'
import iconDjango from '../../assets/images/django_icon.svg'
import iconNode from '../../assets/images/node_icon.svg'
import iconGoogle from '../../assets/images/google_icon.svg'
import iconAws from '../../assets/images/aws_icon.svg'
import iconRails from '../../assets/images/rails_icon.svg'
import '../../styles/technologies.scss'

function Technologies() {
  return (
    <div className="technologies">
      <div className="container container-sw">
        <div className="capt">Technologies</div>
        <div className="desc">
          We will find the best solution for you, let’s cooperate with us
        </div>
        <div className="technologies-content">
          <a href="/">
            <img src={iconVue} />
          </a>
          <a href="/">
            <img src={iconReact} />
          </a>
          <a href="/">
            <img src={iconAngular} />
          </a>
          <a href="/">
            <img src={iconDjango} />
          </a>
          <a href="/">
            <img src={iconNode} />
          </a>
          <a href="/">
            <img src={iconGoogle} />
          </a>
          <a href="/">
            <img src={iconAws} />
          </a>
          <a href="/">
            <img src={iconRails} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Technologies
