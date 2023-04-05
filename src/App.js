import React from 'react'
import VideosInGrid from './components/VideosInGrid'

const App = () => {
  return (
    <div>
      <h1 className='font-bold text-center p-5 text-4xl'>Youtube layout</h1>
      <div>
        <VideosInGrid /> 
      </div>
    </div>
  )
}

export default App
