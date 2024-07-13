import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const VideoTitle = ({ title, description }) => {
  const languageKey = useSelector((store) => store.config.lang);
  
  return (
    <div className="w-full aspect-video py-32 md:py-60 px-10 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl md:text-5xl">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{description}</p>
      <div className="flex my-2 md:my-0">
        <button className="font-bold text-lg md:text-xl text-black bg-white py-2 px-5 rounded-full md:rounded-md flex items-center hover:bg-opacity-80">
          <FaPlay className="mx-0 md:mx-1" size={23} />
          <h1 className="hidden md:inline-block">{lang[languageKey].playButtonVideoTitle}</h1>
        </button>
        <button className="font-bold text-xl mx-2 bg-gray-400 bg-opacity-50 py-2 px-5 rounded-full md:rounded-md flex items-center hover:bg-opacity-30">
          <IoMdInformationCircleOutline className="mx-0 md:mx-1" size={30} />
          <h1 className="hidden md:inline-block">{lang[languageKey].moreIngoVideoTitle}</h1>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
