import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-full aspect-video py-60 px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="py-6 text-lg w-1/3">{description}</p>
      <div className="flex">
        <button className="font-bold text-xl text-black bg-white py-2 px-5 rounded-md flex items-center hover:bg-opacity-80">
          <FaPlay className="mx-1" size={23} /> Play
        </button >
        <button className="font-bold text-xl mx-2 bg-gray-400 bg-opacity-50 py-2 px-5 rounded-md flex items-center hover:bg-opacity-30">
            <IoMdInformationCircleOutline className="mx-1" size={30} />More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
