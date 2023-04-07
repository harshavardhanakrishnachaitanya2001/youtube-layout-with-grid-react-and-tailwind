import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import VideosInGrid from './components/VideosInGrid'

const App = () => {
  return (
    <div className='h-full'>
      <div className='w-full fixed bg-white'>
        <div className='text-center'>
          <input type="text" className='w-1/2 text-md border py-2 rounded-full px-5 my-2' placeholder='search' />
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
