import React from 'react'
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
              <a href={item.url} key={i}>
                <img src={item.image} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Technologies
