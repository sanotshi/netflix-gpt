import React from 'react';


const VideoTitle = ({Title,overview}) => {
  return (
    <div className='pt-[30%] px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
        <h1 className='text-4xl font-bold'>{Title}</h1>
        <h2 className='text-lg w-1/4 py-4'>{overview}</h2>
        <div className='p-4'>
            <button className='border  p-2 bg-white  px-6 text-xl text-black font-bold mx-2 rounded-lg hover:bg-slate-300'>Play</button>
            <button className='border  bg-gray-500  text-xl p-2 px-4 text-white rounded-lg hover:bg-zinc-400'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;