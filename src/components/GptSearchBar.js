import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-32 flex justify-center'>
        <form className='bg-black  w-1/2 grid grid-cols-12'>
            <input type="text" placeholder='what would you like to watch today?'className='p-4 m-4 col-span-9 rounded-lg cursor-pointer'/>
            <button className='text-white px-4 bg-red-500 py-2 m-4 rounded-lg col-span-3 cursor-pointer'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar