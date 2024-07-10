import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [profileImgToggle, setProfileImgToggle] = useState(false);

  const dispatch = useDispatch();

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

  return (
    <div className="absolute flex justify-between px-10 py-4 bg-gradient-to-b from-black z-10 w-full">
      <img className="w-52" src={NETFLIX_LOGO_URL} alt="logo" />
      {user && (
        <div className="w-auto mx-10 p-2 items-center">
          <img
            className="w-14 h-14 rounded-md cursor-pointer"
            src={user.photoURL}
            alt="user-icon"
            onClick={handleProfileImgClick}
          />
          {profileImgToggle && (
            <div className="absolute text-center bg-gradient-to-t from-black p-2 m-auto right-0 w-52 rounded-md">
              <h1 className="p-2 text-lg bg-green-600 text-white rounded-md m-2">
                {user?.displayName}
              </h1>
              <button
                className="px-3 py-2 mx-2 bg-red-600 text-white font-bold rounded-md"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
