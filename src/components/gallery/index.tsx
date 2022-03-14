import React from 'react'
import '../../styles/gallery.scss'

function Gallery({ item }) {
  return (
    <div className="clipped">
      <div className="mask">
        <div className="title">{item.title}</div>
        <div className="desc">{item.description}</div>
      </div>
      <img src={item.image} />
    </div>
  )
}

export default Gallery
