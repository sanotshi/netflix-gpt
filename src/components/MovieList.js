import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-2 md:px-6 ">
      <h1 className="text-xl md:text-3xl py-1 md:py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        
         <div className=" flex"> 
           { movies?.map((movie) => ( 
             <MovieCard key={movie.id} posterPath={movie.poster_path} /> 
           ))} 
           {/* undefined.map() */}
           {/* <MovieCard posterPath={movies[0].poster_path} />  */}
         </div> 
      </div>
    </div>
  );
};

export default MovieList;
