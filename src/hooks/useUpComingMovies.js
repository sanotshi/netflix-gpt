import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { API_OPTIONS } from '../utilities/constants';
import { addUpComingMovies } from '../utilities/moviesSlice';

const useUpComingMovies = () => {
    const dispatch=useDispatch();

    const getUpComingMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS)
        const json=await data.json();
dispatch(addUpComingMovies(json.results))
    }
    useEffect(()=>{
        getUpComingMovies();
    },[])
 
}

export default useUpComingMovies;