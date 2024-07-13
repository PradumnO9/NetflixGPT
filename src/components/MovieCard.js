import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-40 md:w-52 pr-4 hover:scale-110 ease-in duration-150">
      <img
        className="rounded-md"
        alt="Movie Card"
        src={`${IMG_CDN_URL}${posterPath}`}
      />
    </div>
  );
};

export default MovieCard;
