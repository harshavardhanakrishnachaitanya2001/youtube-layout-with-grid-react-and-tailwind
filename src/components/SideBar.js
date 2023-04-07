import React from 'react'

const SideBar = () => {
    const options = ['Home', 'Shorts', 'Subscriptions', 'Library', 'History', 'Your videos', 'Watch later', 'Your clips']
  return (
    <div className='flex flex-col fixed'>
        <div className=' border-b-2 border-gray-100'>
            {
                options.map((option) => (
                    <p className='hover:bg-gray-100 cursor-pointer w-1 lg:py-2 lg:px-2 xl:py-5 xl:px-4 xl:w-40 h-14 rounded-lg' key={option}>{option}</p>
                ))
            }
        </div>
    </div>
  )
}

export default SideBar