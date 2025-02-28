import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidDataSignIn, checkValidDataSignUp } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { BG_IMG_URL, PROFILE_IMG_URL } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    if (!isSignInForm) {
      const message = checkValidDataSignUp(name.current.value, email.current.value, password.current.value);
      setErrorMsg(message);
      if (message) return;
    } else {
      const message = checkValidDataSignIn(email.current.value, password.current.value);
      setErrorMsg(message);
      if (message) return;
    }

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_IMG_URL
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:h-auto"
          src={BG_IMG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 w-11/12 md:w-3/12 bg-black bg-opacity-80 mx-auto left-0 right-0 my-56 md:my-48 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-2 w-full bg-gray-700 rounded-sm"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-2 w-full bg-gray-700 rounded-sm"
          ref={email}
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-2 w-full bg-gray-700 rounded-sm"
          ref={password}
          type="password"
          placeholder="Password"
        />
        <span className="py-3 font-bold text-lg text-red-700">{errorMsg}</span>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg hover:bg-red-800"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 w-full cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix -> Sign Up Now"
            : "Already A User -> Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
