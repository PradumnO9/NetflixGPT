import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4">
      <h1 className="text-2xl md:text-3xl py-4 text-white">{title}</h1>
      <div className="movieList-scroll flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie?.poster_path} movieId={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
