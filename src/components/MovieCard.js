import React, { useState } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constant";
import { FaPlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addPlayVideo } from "../redux/moviesSlice";
import PopUp from "../PopUp";
import PlayVideo from "./PlayVideo";

const MovieCard = ({ posterPath, movieId }) => {
  const [videoPopUP, setVideoPopUp] = useState(false);
  const dispatch = useDispatch();
  if (!posterPath) return null;

  const handlePlayVideo = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json?.results.filter((video) => video?.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addPlayVideo(trailer));
    setVideoPopUp(!videoPopUP);
  };

  return (
    <div
      className="relative w-40 md:w-52 pr-4 cursor-pointer flex items-center hover:scale-110 ease-in duration-150 group"
      onClick={() => handlePlayVideo(movieId)}
    >
      <img
        className="rounded-md"
        alt="Movie Card"
        src={`${IMG_CDN_URL}${posterPath}`}
      />
      <div className="absolute ml-[35%] bg-white rounded-full p-3 group-hover:scale-125 ease-in duration-200 md:invisible md:group-hover:visible">
        <FaPlay color="black" size={25} />
      </div>
      {videoPopUP && (
        <PopUp onClose={() => setVideoPopUp(false)}>
          <PlayVideo />
        </PopUp>
      )}
    </div>
  );
};

export default MovieCard;
