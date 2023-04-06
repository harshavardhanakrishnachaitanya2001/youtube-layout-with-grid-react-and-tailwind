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
  <>
    <div className='flex gap-4 justify-start items-start flex-wrap '>
      <div className='flex flex-col border-b-2 border-gray-100'>
        <p className='hover:bg-gray-100 py-5 px-4 w-80 rounded-lg'>Home</p>
        <p className='hover:bg-gray-100 py-5 px-4 w-80 rounded-lg'>shorts</p>
        <p className='hover:bg-gray-100 py-5 px-4 w-80 rounded-lg'>Subscriptions</p>
      </div>
      <div className='flex flex-wrap space-x-4'>
        <Video imagesrc={thumbnail1} title="Naruto"/>
        <Video imagesrc={inuyasha} title="Inuyasha"/>
        <Video imagesrc={kenshin} title="Kenshin Himura"/>
        <Video imagesrc={anyaforger} title="Anya Forger"/>
        <Video imagesrc={bleach} title="Ichigo kurasaki"/>
        <Video/>
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  </>
  )
}

export default VideosInGrid
