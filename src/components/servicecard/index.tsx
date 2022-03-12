import React from 'react'
import '../../styles/servicecard.scss'

function ServiceCard(props) {
  return (
    <div className="service-card">
      <div className={'card-icon'}>
        <img src={props.icon} />
      </div>
      <div
        className={
          props.title === 'Design' ? 'card-title design' : 'card-title other'
        }
      >
        {props.title}
      </div>
      <div className="card-description other">{props.description}</div>
    </div>
  )
}

export default ServiceCard
