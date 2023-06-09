import React from 'react'
import Navbar from './components/Navbar'
import VideosInGrid from './components/VideosInGrid'
import SideBar from './components/SideBar'



const App = () => {
  
  return (
    <div>
      <div className='mx-auto w-screen fixed bg-white'>
        <div className=' w-full h-full'>
          <div className='w-full h-full text-center'>
            <input type="text" className=' w-1/2 text-md border py-2 rounded-full px-5 my-2' placeholder='search' />
          </div>
          <Navbar />
          <SideBar />
        </div>
      </div>
      <div>
        <VideosInGrid/>
      </div>
    </div>
  )
}

export default App
