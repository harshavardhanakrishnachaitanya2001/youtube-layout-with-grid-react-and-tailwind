import React from 'react'
import Video from './components/Video'

const App = () => {
  return (
    <div>
      <h1 className='font-bold text-center p-5 text-4xl'>Youtube layout</h1>
      <div className='grid grid-cols-6 text-center gap-4'>
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  )
}

export default App
