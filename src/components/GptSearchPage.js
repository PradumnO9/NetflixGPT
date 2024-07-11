import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggesations from "./GptMovieSuggesations";
import { BG_IMG_URL } from "../utils/constant";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMG_URL} alt="bg-image" />
      </div>
      <GptSearchBar />
      <GptMovieSuggesations />
    </div>
  );
};

export default GptSearchPage;
