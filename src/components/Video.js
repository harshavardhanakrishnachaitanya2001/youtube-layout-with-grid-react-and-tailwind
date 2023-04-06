import React from 'react'

const Video = ({imagesrc, title}) => {
  return (
    <div className=''>
      <img src={imagesrc} alt='' className='rounded-lg w-168 h-300 basis-5'/>
      <h3 className='font-bold text-xl'>{title}</h3>
    </div>
  )
}

export default Video