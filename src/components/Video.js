import React from 'react'
import uploader1 from '../images/uploader1.jpg'

const Video = ({imagesrc, title}) => {
  return (
    <div className='bg-contain'>
      <img src={imagesrc} alt='' className ={'rounded-lg w-[360px] h-[203px] p-5'}/>
      <div className='flex gap-2'>
        <div className='ml-5'>
          <img src={uploader1} alt='' className='w-[36px] h-[36px] rounded-full'/>
        </div>
        <div className='mb-2'>
          <h3>{title}</h3>
          <p>Hello</p>
          <p>Hello 2</p>
        </div>
      </div>
    </div> 
  )
}

export default Video