import React from 'react'
import shesshomaru from '../images/shesshomaru.jpg'
import shortimage from '../images/shortimage.jpg'

const Shorts = () => {
  return (
    <div className='h-[5%] lg:h-auto flex p-2 space-x-4'>
        <div className='w-full'>
            <img src={shesshomaru} alt="" className='h-full w-[100%]'/>
            <p>Hello</p>
        </div>
        <div className='w-full '>
            <img src={shortimage} alt="" className='h-full w-[100%]'/>
            <p>Hello</p>
        </div>
        <div className='w-full'>
            <img src={shortimage} alt="" className='h-full' />
            <p>Hello</p>
        </div>
        <div className='w-full'>
            <img src={shortimage} alt="" className='h-full' />
            <p>Hello</p>
        </div>
        <div className='w-full'>
            <img src={shortimage} alt="" className='h-full' />
            <p>Hello</p>
        </div>
        <div className='w-full'>
            <img src={shortimage} alt="" className='h-full' />
            <p>Hello</p>
        </div>
        
        
    </div>
  )
}

export default Shorts