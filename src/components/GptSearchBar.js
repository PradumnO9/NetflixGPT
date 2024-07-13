import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../redux/gptSlice";
// import openai from "../utils/openai";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchButton = async () => {
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Stree, Tumbbad, Raaz, Pari, Bhool Bhulaiyaa";

    // const gptSearchResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(gptSearchResult.choices?.[0]?.message?.content);
    // const gptMovies = gptSearchResult.choices?.[0]?.message?.content.split(", ")
    const gptMovies = ["Stree", "Tumbbad", "Raaz", "Pari", "Bhool Bhulaiyaa"];

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-2 md:m-4 col-span-9 rounded-lg"
          ref={searchText}
          type="text"
          placeholder={lang[languageKey].gptSeacrhPlaceholder}
        />
        <button
          className="m-2 md:m-4 py-2 px-2 md:px-4 col-span-3 bg-red-700 text-white rounded-lg hover:bg-opacity-80"
          onClick={handleGptSearchButton}
        >
          {lang[languageKey].gptSearch}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
