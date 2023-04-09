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
    <div className='w-full grid grid-rows-[180px,80px] gap-2'>
      <div className="w-full h-full">
        <img src={imagesrc} alt='' className ='rounded-lg  h-full w-full object-cover bg-gray-100'/>
      </div>
      <div className='flex gap-2'>
        <div>
          <img src={uploader1} alt='' className='w-[36px] h-[36px] rounded-full'/>
        </div>
        <div className=''>
          <h3 className='font-bold'>{title}</h3>
          <p>{uploader}</p>
          <p>{views} views.</p>
        </div>
      </div>
    </div> 
  )
}
export default Video