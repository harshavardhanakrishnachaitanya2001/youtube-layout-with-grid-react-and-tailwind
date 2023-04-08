import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
    <nav className='fixed w-full cursor-pointer'>
       <ul className='h-auto flex items-center lg:w-auto gap-2 p-2 justify-center bg-white'>
            <li className='p-2 bg-gray-300 rounded-lg transition hover:bg-gray-200'>All</li>
            <li className='p-2 bg-gray-300 rounded-lg transition hover:bg-gray-200'>Gaming</li>
            <li className='p-2 bg-gray-300 rounded-lg transition hover:bg-gray-200'>Mixes</li>
            <li className='p-2 bg-gray-300 rounded-lg transition hover:bg-gray-200'>Lions</li>
            <li className='p-2 bg-gray-300 rounded-lg transition hover:bg-gray-200'>Wildlife</li>
            <li className='p-2 bg-gray-300 rounded-lg transition hover:bg-gray-200'>Tamil Cinema</li>
            <li className='p-2 bg-gray-300 rounded-lg transition hover:bg-gray-200'>Music</li>
            <li className='p-2 bg-gray-300 rounded-lg transition hover:bg-gray-200'>Live</li>
        </ul> 
    </nav>
    </div>
  )
}

export default Navbar