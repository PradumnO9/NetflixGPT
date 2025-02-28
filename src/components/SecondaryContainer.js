import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import LoadingSpinner from "../utils/LoadingSpinner";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const languageKey = useSelector((store) => store.config.lang);
  if (!movies) return <LoadingSpinner />;

  return (
    movies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-64 pl-0 md:pl-10 relative z-10">
          <MovieList
            title={lang[languageKey].nowPlayingTitle}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList
            title={lang[languageKey].popularTitle}
            movies={movies?.popularMovies}
          />
          <MovieList
            title={lang[languageKey].topRatedTitle}
            movies={movies?.topRatedMovies}
          />
          <MovieList
            title={lang[languageKey].upComingMoviesTitle}
            movies={movies?.upcomingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
