import React from 'react'
import Video from './Video'
import thumbnail1 from '../../src/images/thumbnail1.jpg'
import inuyasha from '../../src/images/inuyasha.jpg'

const VideosInGrid = () => {
  return (
    <div className='grid grid-cols-6 gap-4 overflow-hidden'>
      <Video imagesrc={thumbnail1} title="Naruto"/>
      <Video imagesrc={inuyasha} title="Inuyasha"/>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  )
}

export default VideosInGrid
