import uploader1 from '../images/uploader1.jpg'

// const Video = ({imagesrc, title}) => {
//   return (
//     <div>
//       <img src={imagesrc} alt='' className ='rounded-lg w-[360px] h-[203px] p-5 object-cover'/>
//       <div className='flex gap-2'>
//         <div className='ml-5'>
//           <img src={uploader1} alt='' className='w-[36px] h-[36px] rounded-full'/>
//         </div>
//         <div className='mb-2'>
//           <h3>{title}</h3>
//           <p>Hello</p>
//           <p>Hello 2</p>
//         </div>
//       </div>
//     </div> 
//   )
// }

// export default Video


const Video = ({imagesrc, title,uploader, views}) => {
  return (
    <>
      {/* Image and uploader container */}
      <div className='w-[360px] h-[180px] mx-auto'>

        {/* Image */}
          <img src={imagesrc} alt='' className =' px-7 md:px-0 rounded-lg object-cover w-full h-full'/>
       
        {/* UPloader info */}
        <div className='flex space-x-2 py-1 px-7 md:px-0'>
          <div>
            <img src={uploader1} alt='' className='w-[36px] h-[36px] rounded-full'/>
          </div>
          <div>
            <h3 className='font-bold'>{title}</h3>
            <p>{uploader}</p>
            <p>{views} views.</p>
          </div>
      </div>    
    </div>
    </>
  )
}
export default Video