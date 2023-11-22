import React from 'react'
import lang from '../utilities/languageConstants'
import {useSelector} from "react-redux";

const GptSearchBar = () => {

  const langKey=useSelector(store=>store.config.lang)
  return (
    <div className='pt-32 flex justify-center'>
        <form className='bg-black  w-1/2 grid grid-cols-12'>
            <input type="text" placeholder={lang[langKey].gptSearchPlaceholder} className='p-4 m-4 col-span-9 rounded-lg cursor-pointer'/>
            <button className='text-white px-4 bg-red-500 py-2 m-4 rounded-lg col-span-3 cursor-pointer'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar