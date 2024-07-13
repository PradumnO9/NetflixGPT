import React from "react";
import { useSelector } from "react-redux";

const PlayVideo = () => {
  const movieVideo = useSelector((store) => store.movies?.playVideo);
  if(!movieVideo) return <h1>No Video for this Movie!</h1>;

  return (
    <div>
      <iframe
        className="w-full h-[33.5rem]"
        src={`https://www.youtube.com/embed/${movieVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default PlayVideo;
