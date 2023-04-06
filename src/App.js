import React from 'react'
import VideosInGrid from './components/VideosInGrid'

const App = () => {
  return (
    <div>
      <div className='w-full text-center'>
        <input type="text" className='text-md border py-2 rounded-full px-5 my-2 w-96' placeholder='search' />
      </div>
      <div>
        <VideosInGrid /> 
      </div>
    </div>
  )
}

export default App
