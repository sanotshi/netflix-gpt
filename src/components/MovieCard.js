import React from 'react'
import { IMG_CDN } from '../utilities/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 pr-4'>
        <img src={IMG_CDN+posterPath} alt="movieCard" />
    </div>
  )
}

export default MovieCard;