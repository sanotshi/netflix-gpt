import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  // console.log(movies)
  return(
  movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20 pl-12'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      <MovieList title={"Up Coming"} movies={movies?.upComingMovies} />
      <MovieList title={"New Releases"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  )
  )
}

export default SecondaryContainer;