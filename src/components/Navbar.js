import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
    <nav className='fixed cursor-pointer bg-'>
       <ul className='flex gap-2 justify-center'>
            <li className='bg-gray-100 p-2'>All</li>
            <li className='bg-gray-100 p-2'>Gaming</li>
            <li className='bg-gray-100 p-2'>Mixes</li>
            <li className='bg-gray-100 p-2'>Lions</li>
            <li className='bg-gray-100 p-2'>Wildlife</li>
            <li className='bg-gray-100 p-2'>Tamil Cinema</li>
            <li className='bg-gray-100 p-2'>Music</li>
            <li className='bg-gray-100 p-2'>Live</li>
        </ul> 
    </nav>
    </div>
  )
}

export default Navbar