import React from "react";
import netflix from "../assets/Netflix_Logo_PMS.png";
import { Link, redirect } from "react-router-dom";

const Header = ({ isSignInForm, setIsSignInForm }) => {

    const handleSignIn =() => {
        redirect('/login');
        setIsSignInForm(true);
    }
  return (
    <div className="w-full px-8 py-2 bg-gradient-to-b from-black absolute flex justify-between items-center z-10">
      <div
        className="flex cursor-pointer
    px-8 py-2 "
      >
        <img alt="netflix-logo" className="w-48" src={netflix} />
      </div>
      {!isSignInForm && (
        <div className="flex gap-4 mr-20">
          <select>
            <option>English</option>
            <option>hindi</option>
          </select>
          <Link to={'/login'} onClick={handleSignIn} className="px-3 py-2 rounded-lg font-medium hover:bg-red-700 text-white bg-red-600">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
