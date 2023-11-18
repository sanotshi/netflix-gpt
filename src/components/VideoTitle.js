import React from 'react'

const VideoTitle = ({Title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-5xl font-bold'>{Title}</h1>
        <h2 className='text-xl'>{overview}</h2>
        <div className='p-4'>
            <button className='border border-gray-600 p-2 bg-white text-xl font-bold mx-2'>Play</button>
            <button className='border border-gray-700 bg-zinc-400 font-bold text-xl p-2 text-white'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;