import React from 'react'
import shesshomaru from '../images/shesshomaru.jpg'
import shortimage from '../images/shortimage.jpg'

const Shorts = () => {
  return (
    <div className='h-96 flex p-2 w-[100%] space-x-4'>
        <div>
            <img src={shesshomaru} alt=""/>
            <p>Hello</p>
        </div>
        <div>
            <img src={shortimage} alt=""/>
            <p>Hello</p>
        </div>
        <div>
            <img src={shortimage} alt=""/>
            <p>Hello</p>
        </div>
        <div>
            <img src={shortimage} alt=""/>
            <p>Hello</p>
        </div>
        <div>
            <img src={shortimage} alt=""/>
            <p>Hello</p>
        </div>
        <div>
            <img src={shortimage} alt=""/>
            <p>Hello</p>
        </div>
        
        
    </div>
  )
}

export default Shorts