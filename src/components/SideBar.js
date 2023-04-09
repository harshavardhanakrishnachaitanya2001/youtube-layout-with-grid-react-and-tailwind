import {useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
const SideBar = () => {
    const [displaySidebar,setDisplaySidebar] = useState(true)
    const options = ['Home', 'Shorts', 'Subscriptions', 'Library', 'History', 'Your videos', 'Watch later', 'Your clips']
  return (
        <div className="lg:mb-0">
                    <RxHamburgerMenu onClick={() => setDisplaySidebar(!displaySidebar)} />
                    {
                        displaySidebar &&(
                            <div className='hidden lg:grid lg:grid-cols-1 lg:gap-0 lg:justify-center fixed'>
                        {
                            options.map((option) => (
                            <p className=' hover:bg-gray-100 cursor-pointer lg:py-2 lg:px-2 xl:py-5 xl:px-4 xl:w-40 rounded-lg' key={option}>{option}</p>
                            ))
                        }
                    </div>
                        )
                    }
        </div>
  )
}
export default SideBar