import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/home/gallery.scss'
import { GalleryItem } from './galleryItem'

function Gallery({ image, url, title, description }: GalleryItem) {
  return (
    <div className="clipped swg" style={{ backgroundImage: `url(${image})` }}>
      <Link to={url}>
        <div className="mask">
          <div className="title">{title}</div>
          <div className="desc">{description}</div>
        </div>
      </Link>
    </div>
  )
}

export default Gallery
