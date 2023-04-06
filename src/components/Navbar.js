import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
    <nav className='fixed cursor-pointer bg-'>
       <ul className='flex gap-2 p-2 justify-center bg-white'>
            <li className='p-2 bg-gray-200 rounded-lg transition'>All</li>
            <li className='p-2 bg-gray-200 rounded-lg transition'>Gaming</li>
            <li className='p-2 bg-gray-200 rounded-lg transition'>Mixes</li>
            <li className='p-2 bg-gray-200 rounded-lg transition'>Lions</li>
            <li className='p-2 bg-gray-200 rounded-lg transition'>Wildlife</li>
            <li className='p-2 bg-gray-200 rounded-lg transition'>Tamil Cinema</li>
            <li className='p-2 bg-gray-200 rounded-lg transition'>Music</li>
            <li className='p-2 bg-gray-200 rounded-lg transition'>Live</li>
        </ul> 
    </nav>
    </div>
  )
}

export default Navbar