import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { addUser, removeUser } from "../redux/userSlice";
import { toggleGptSearchView, removeGptMovieResult } from "../redux/gptSlice";
import { changeLanguage } from "../redux/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const languageKey = useSelector((store) => store.config.lang);
  const [profileImgToggle, setProfileImgToggle] = useState(false);

  const handleProfileImgClick = () => [setProfileImgToggle(!profileImgToggle)];

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsbscribe called when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    // on click of gpt search button gpt search movie results remove from redux store => gpt slice
    dispatch(removeGptMovieResult());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute flex justify-between px-5 md:px-10 py-4 bg-gradient-to-b from-black z-30 w-full">
      <img className="w-36 h-20 md:w-52 md:h-auto" src={NETFLIX_LOGO_URL} alt="logo" />
      {user && (
        <div className="w-auto mx-10 p-2 items-center">
          <div className="flex">
            <div className="invisible md:visible">
              <select
                className="p-2 my-2 bg-black text-white rounded-lg"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => {
                  return (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  );
                })}
              </select>
              <button
                className="px-3 py-2 my-2 mx-4 bg-purple-800 text-white font-bold rounded-md hover:bg-opacity-85"
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? "Home" : "GPT Search"}
              </button>
            </div>
            <img
              className="w-14 h-14 -mr-10 md:-mr-0 rounded-md cursor-pointer"
              src={user.photoURL}
              alt="user-icon"
              onClick={handleProfileImgClick}
            />
          </div>
          {profileImgToggle && (
            <div className="absolute text-center bg-gradient-to-t from-black p-2 m-auto right-0 w-44 md:w-52 rounded-md -mt-12 md:-mt-0">
              <h1 className="p-2 text-lg bg-gray-500 text-white bg-opacity-50 rounded-md m-2">
                {user?.displayName}
              </h1>
              <div className="visible md:hidden">
                <select
                  className="p-2 my-2 bg-black text-white rounded-lg"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => {
                    return (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                      </option>
                    );
                  })}
                </select>
                <button
                  className="px-3 py-2 my-2 mx-4 bg-purple-800 text-white font-bold rounded-md hover:bg-opacity-85"
                  onClick={handleGptSearchClick}
                >
                  {showGptSearch ? "Home" : "GPT Search"}
                </button>
              </div>
              <button
                className="px-3 py-2 m-2 bg-red-600 text-white font-bold rounded-md hover:bg-opacity-85"
                onClick={handleSignOut}
              >
                {lang[languageKey].signOutButton}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
