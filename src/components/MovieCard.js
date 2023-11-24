import React from 'react'
import { IMG_CDN } from '../utilities/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-32 md:w-40 pr-4'>
        <img src={IMG_CDN+posterPath} alt="movieCard" className=''/>
    </div>
  )
}

export default MovieCard;