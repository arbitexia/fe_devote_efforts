import React from 'react'
import communicationLab from '../../../assets/images/comlab_logo.png'
import hightech from '../../../assets/images/htpkr_logo.png'
import fedex from '../../../assets/images/fedex_logo.png'
import kssda from '../../../assets/images/kssda_logo.png'
import inessoft from '../../../assets/images/inessoft_logo.png'
import '../../../styles/home/clients.scss'

function Clients() {
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-content">
          <a href="/">
            <img src={communicationLab} />
          </a>
          <a href="/">
            <img src={hightech} />
          </a>
          <a href="/">
            <img src={fedex} />
          </a>
          <a href="/">
            <img src={kssda} />
          </a>
          <a href="/">
            <img src={inessoft} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Clients
