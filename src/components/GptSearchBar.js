import React, { useRef } from "react";
import lang from "../utilities/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utilities/openai";
import { API_OPTIONS } from "../utilities/constants";
import { addGptMovieResults } from "../utilities/gptSlice";

const GptSearchBar = () => {
  const dispatch=useDispatch();
  const showText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json=await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(showText.current.value);

    const gptQuery =
      "act as a movie recommendation system and suggest some movie for the query" +
      showText.current.value +
      ". only give me 5 movies,comma separated like the example result given ahead.example result:MAD,jathi ratnalu,Miss shetty Mr polishetty.";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0]?.message?.content.split(","));
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbResults}));
  };

  return (
    <div className="pt-32 flex justify-center">
      <form
        className="bg-black  w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={showText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 rounded-lg cursor-pointer"
        />
        <button
          className="text-white px-4 bg-red-500 py-2 m-4 rounded-lg col-span-3 cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
