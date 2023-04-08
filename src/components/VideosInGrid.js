import React from 'react'
import Video from './Video'
import thumbnail1 from '../../src/images/thumbnail1.jpg'
import inuyasha from '../../src/images/inuyasha.jpg'
import kenshin from '../../src/images/kenshin.jpg'
import anyaforger from '../../src/images/anyaforger.jpg'
import bleach from '../../src/images/bleach.jpg'
import midoriay from '../../src/images/midoriay.jpg'
import tanjiro from '../../src/images/tanjiro.jpg'
import saitama from '../../src/images/saitama.jpg'
import gojosatoru from '../../src/images/gojosatoru.jpg'
import lightyagami from '../../src/images/lightyagami.jpg'
import eren from '../../src/images/eren.jpg'
import goku from '../../src/images/goku.jpg'
import Shorts from './Shorts'


const VideosInGrid = () => {
  return (
  <>
    <div className='flex gap-4'>
      <div className='lg:flex flex-wrap gap-2 mt-24 mx-auto lg:mx-40 overflow-hidden'>
        <Video imagesrc={thumbnail1} title="Naruto" uploader="Siddharth Ponnapalli" views="5M"/>
        <Video imagesrc={inuyasha} title="Inuyasha" uploader="Harsha" views="2K"/>
        <Video imagesrc={kenshin} title="Kenshin Himura" uploader="Mahima" views="4M"/>
        <Video imagesrc={anyaforger} title="Anya Forger" uploader="Aravind Ganagavarapu" views="10K"/>
        <Video imagesrc={bleach} title="Ichigo kurasaki" uploader="Bhargav Ponnapalli" views="20M"/>
        <Video imagesrc={midoriay} title="Midoriya izuku" uploader="Rahul Tech" views="50K"/>
        <Video imagesrc={tanjiro} title="Tanjiro" uploader="Kishore Krishnamurty" views="1M"/>
        <Video imagesrc={saitama} title="shortimage" uploader="Agent Boby" views="2"/>
        <Video imagesrc={gojosatoru} title="Gojo Satoru" uploader="Mark Twain" views="40k"/>
        <Shorts />
        <Video imagesrc={lightyagami} title="Light Yagami" uploader = "KC codes" views="20K"/>
        <Video imagesrc={eren} title="Eren jegar" uploader="Let's Anime" views="32.1K"/>
        <Video imagesrc={goku} title="Son Goku" uploader="Let's Anime" views="33.1K"/>
      </div>
    </div>
  </>
  )
}

export default VideosInGrid
