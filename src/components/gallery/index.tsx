import React from 'react'
import '../../styles/gallery.scss'

function Gallery({ item }) {
  return (
    <div className="clipped" style={{ backgroundImage: `url(${item.image})` }}>
      <a target="_blank" href={item.url}></a>
      <div className="mask">
        <div className="title">{item.title}</div>
        <div className="desc">{item.description}</div>
      </div>
    </div>
  )
}

export default Gallery
