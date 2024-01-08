import React from "react";
import netflix from "../assets/Netflix_Logo_PMS.png";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = ({ isSignInForm, setIsSignInForm }) => {
  const userData = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleSignIn = () => {
    redirect("/login");
    setIsSignInForm(true);
  };
  return (
    <div className="w-full px-8 py-2 bg-gradient-to-b from-black absolute flex justify-between items-center z-10">
      <div
        className="flex cursor-pointer
    px-8 py-2 "
      >
        <img alt="netflix-logo" className="w-48" src={netflix} />
      </div>
      {userData ? (
        <div className="flex gap-4 items-center justify-between px-2 py-1">
          <p className="font-semibold text-white text-lg">{userData?.displayName}</p>
          <img  className="w-16 h-16 rounded-full" src={userData?.photoURL} alt="usericon" />
          <button
            onClick={handleSignOut}
            className="text-white text-lg font-semibold bg-red-600 px-2 py-1 rounded-lg hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex gap-4 mr-20">
          <select>
            <option>English</option>
            <option>hindi</option>
          </select>
          <Link
            to={"/login"}
            onClick={handleSignIn}
            className="px-3 py-2 rounded-lg font-medium hover:bg-red-700 text-white bg-red-600"
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
