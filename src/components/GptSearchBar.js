import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[languageKey].gptSeacrhPlaceholder}
        />
        <button className="m-4 py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg">
          {lang[languageKey].gptSearch}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
