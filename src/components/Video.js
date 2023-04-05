import React from 'react'

const Video = ({imagesrc, title}) => {
  return (
    <div className='p-5'>
      <img src={imagesrc} alt='' className='w-[100%] rounded-lg'/>
      <h3 className='font-bold text-xl'>{title}</h3>
    </div>
  )
}

export default Video