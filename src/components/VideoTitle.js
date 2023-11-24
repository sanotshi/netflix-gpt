import React from 'react';


const VideoTitle = ({Title,overview}) => {
  return (
    <div className='pt-[90%] md:pt-[20%] px-12 md:px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
        <h1 className='text-xl md:text-4xl font-bold'>{Title}</h1>
        <h2 className='hidden md:inline-block text-lg w-1/4 py-3'>{overview}</h2>
        <div className='p-1 md:p-4 flex my-1'>
            <button className=' py-0 md:py-2 bg-white px-3 md:px-6 text-md md:text-xl text-black font-bold mx-2 rounded-lg hover:bg-slate-300'>Play</button>
            <button className='  bg-gray-500  text-xl py-1 md:py-2 px-2 md:px-4 text-white rounded-lg hover:bg-zinc-400'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;