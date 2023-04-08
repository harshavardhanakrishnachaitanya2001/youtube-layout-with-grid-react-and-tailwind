import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import VideosInGrid from './components/VideosInGrid'

const App = () => {
  return (
    <div className='h-full'>
      <div className='mx-auto w-full fixed bg-white'>
        <div className='text-center w-auto'>
          <input type="text" className='w-full text-md border py-2 rounded-full px-5 my-2' placeholder='search' />
          <Navbar />
        </div> 
        <SideBar />
      </div>
      <div>
        <VideosInGrid />
      </div>
    </div>
  )
}

export default App
