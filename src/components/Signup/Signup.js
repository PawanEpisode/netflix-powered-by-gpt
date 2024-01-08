import React from "react";
import Header from "../Header";
import { Link, redirect } from "react-router-dom";

const Signup = ({ isSignInForm, setIsSignInForm }) => {

    const handleGetStarted = () => {
        redirect('/signup');
    }
  return (
    <div className="w-full h-full absolute">
        <Header isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm} />
      <div className="w-full relative h-full">
        <div className="absolute">
          <img
            className="h-full"
            alt="logo"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-hi-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          />
        </div>
        <div
          className="absolute text-center flex text-white 
      flex-col gap-4 my-[300px] mx-[200px] right-0 left-0"
        >
          <div className="flex flex-col gap-6">
            <p className="font-black text-5xl">
              Unlimited movies, TV shows and more
            </p>
            <p className="text-lg font-normal">
              Watch anywhere. Cancel anytime.
            </p>
          </div>
          <div className="my-6 flex flex-col justify-center items-center">
            <h1 className="text-lg font-normal">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
            <div className="w-10/12 flex gap-3 px-16 py-4">
                <input
                type="text"
                placeholder="Email Address"
                className="px-2 outline-none border border-[#rgb(128 128 128 / 70%)] focus:border-4 focus:border-white flex-1 bg-[#333] bg-opacity-80 rounded-md"
                />
                <Link to={'/signup'}
                className="p-4 hover:bg-red-700 bg-red-600 text-3xl font-bold rounded-lg">{`Get Started >`}</Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Pawan</h1>
      </div>
      <div>
        <h1>Pawan</h1>
      </div>
      <div>
        <h1>Pawan</h1>
      </div>
      <div>
        <h1>Pawan</h1>
      </div>
      <div>
        <h1>Pawan</h1>
      </div>
    </div>
  );
};

export default Signup;
