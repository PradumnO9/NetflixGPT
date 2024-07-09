import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute p-12 w-3/12 bg-black bg-opacity-80 mx-auto left-0 right-0 my-48 text-white rounded-lg">
        <h1 className="font-bold text-3xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && 
        <input
          className="p-4 my-2 w-full bg-gray-700 rounded-sm"
          type="text"
          placeholder="Full Name"
        />}
        <input
          className="p-4 my-2 w-full bg-gray-700 rounded-sm"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-2 w-full bg-gray-700 rounded-sm"
          type="password"
          placeholder="Password"
        />
        {isSignInForm ? (
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg hover:bg-red-800">
            Sign In
          </button>
        ) : (
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg hover:bg-red-800">
            Sign Up
          </button>
        )}
        <p className="p-4 w-full cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already A User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
