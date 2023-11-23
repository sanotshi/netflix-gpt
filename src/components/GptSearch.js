import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggetions from './GptMovieSuggetions';
import { BG_URL } from '../utilities/constants';

const GptSearch = () => {
  return (
    <div className=''>
        <div className="fixed  -z-10">
        <img className="h-full"
          src={BG_URL}
          alt="bg-img"
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggetions />
    </div>
  )
}

export default GptSearch;