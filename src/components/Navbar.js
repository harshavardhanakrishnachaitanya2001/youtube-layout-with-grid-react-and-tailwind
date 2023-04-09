import React from 'react'
const Navbar = () => {
  return (
    <div className='flex w-full justify-center'>
    <nav className='fixed cursor-pointer w-full'>
        <ul className='flex p-1 items-center mx-auto  md:w-full gap-1 md:gap-2 justify-center bg-white'>
          <li className='p-1 md:p-2 bg-gray-300 text-sm md:text-lg rounded-lg transition hover:bg-gray-200'>All</li>
          <li className='p-1 md:p-2 bg-gray-300 text-sm md:text-lg rounded-lg transition hover:bg-gray-200'>Gaming</li>
          <li className='p-1 md:p-2 bg-gray-300 text-sm md:text-lg rounded-lg transition hover:bg-gray-200'>Mixes</li>
          <li className='p-1 md:p-2 bg-gray-300 text-sm md:text-lg rounded-lg transition hover:bg-gray-200'>Lions</li>
          <li className='p-1 md:p-2 bg-gray-300 text-sm md:text-lg rounded-lg transition hover:bg-gray-200'>Wildlife</li>
          <li className='p-1 md:p-2 bg-gray-300 text-sm md:text-lg rounded-lg transition hover:bg-gray-200'>Music</li>
          <li className='p-1 md:p-2 bg-gray-300 text-sm md:text-lg rounded-lg transition hover:bg-gray-200 over'>Live</li>
          <li className='hidden md:block p-1 md:p-2 bg-gray-300 text-sm md:text-lg rounded-lg transition hover:bg-gray-200'>Tamil Cinema</li>
        
        </ul> 
    </nav>
    </div>
  )
}

export default Navbar