import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggesations from "./GptMovieSuggesations";
import { BG_IMG_URL } from "../utils/constant";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover lg:h-full" src={BG_IMG_URL} alt="bg-image" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggesations />
      </div>
    </>
  );
};

export default GptSearchPage;
