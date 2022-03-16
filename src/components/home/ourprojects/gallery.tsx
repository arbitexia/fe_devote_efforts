import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/home/gallery.scss'

function Gallery({ item }) {
  return (
    <div
      className="clipped swgs-1"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <Link to={item.url}>
        <div className="mask">
          <div className="title">{item.title}</div>
          <div className="desc">{item.description}</div>
        </div>
      </Link>
    </div>
  )
}

export default Gallery
