import React from 'react'
import shesshomaru from '../images/shesshomaru.jpg'
import shortimage from '../images/shortimage.jpg'

const Shorts = () => {
  return (
    <>
        {/* Shorts container */}
        <div className='grid md:col-span-2 lg:col-span-3 grid-cols-6 w-full h-full p-2 gap-4'>
            <div>
                <img src={shesshomaru} alt="" className='h-full w-full md:w-auto'/>
                <p>Hello</p>
            </div>
            <div>
                <img src={shortimage} alt="" className='h-full w-full md:w-auto'/>
                <p>Hello</p>
            </div>
            <div>
                <img src={shortimage} alt="" className='h-full w-full' />
                <p>Hello</p>
            </div>
            <div>
                <img src={shortimage} alt="" className='h-full w-full' />
                <p>Hello</p>
            </div>
            <div>
                <img src={shortimage} alt="" className='h-full w-full' />
                <p>Hello</p>
            </div>
            <div>
                <img src={shortimage} alt="" className='h-full w-full' />
                <p>Hello</p>
            </div>
        </div>
    </>
  )
}

export default Shorts