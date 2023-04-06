import React from 'react'
import Video from './Video'
import thumbnail1 from '../../src/images/thumbnail1.jpg'
import inuyasha from '../../src/images/inuyasha.jpg'
import kenshin from '../../src/images/kenshin.jpg'
import anyaforger from '../../src/images/anyaforger.jpg'
import bleach from '../../src/images/bleach.jpg'
import shortimage from '../../src/images/shortimage.jpg'

const VideosInGrid = () => {
  return (
    <div className='flex gap-4 justify-start flex-wrap'>
      <Video imagesrc={thumbnail1} title="Naruto"/>
      <Video imagesrc={inuyasha} title="Inuyasha"/>
      <Video imagesrc={kenshin} title="Kenshin Himura"/>
      <Video imagesrc={anyaforger} title="Anya Forger"/>
      <Video imagesrc={bleach} title="Ichigo kurasaki"/>
      <Video imagesrc={shortimage} title="short Image"/>
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
