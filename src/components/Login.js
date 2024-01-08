import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = ({ isSignInForm, setIsSignInForm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullnameRef = useRef(null);

  const handleSignup = () => {
    setIsSignInForm(false);
  };

  const createEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullnameRef.current.value,
          photoURL: "https://avatars.githubusercontent.com/u/65844034?v=4",
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          })
          .catch((error) => {
            setErrorMessage({ error: error.message });
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage({ userError: `${errorCode}-${errorMessage}` });
      });
  };

  const signInWithEmailPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage({ userError: `${errorCode}-${errorMessage}` });
      });
  };

  const handleButtonClick = () => {
    // validate form data
    const message = checkValidData(
      emailRef.current.value,
      passwordRef.current.value,
      fullnameRef.current ? fullnameRef.current.value : ""
    );
    setErrorMessage(message);
    const checkValid = Object.values(message).every((msg) => !msg?.length);
    if (!checkValid) return;

    // Sign in / Sign Up
    if (!isSignInForm) {
      // Signup logic
      createEmailAndPassword(emailRef.current.value, passwordRef.current.value);
    } else {
      // Signin Logic
      signInWithEmailPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
    }
  };
  return (
    <div>
      <Header isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm} />
      <div className="absolute">
        <img
          className="h-full"
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-hi-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute rounded-md flex text-white 
      flex-col gap-4 px-20 my-40 mx-auto right-0 left-0 
      py-16 w-[450px] bg-black bg-opacity-75"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            onFocus={() => setErrorMessage(null)}
            ref={fullnameRef}
            type="text"
            placeholder="Full Name"
            className={`${
              errorMessage?.isFullNameValid?.length
                ? "border-2 border-red-600"
                : ""
            } p-2 bg-[#333] rounded-md`}
          />
        )}
        <input
          onFocus={() => setErrorMessage(null)}
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className={`${
            errorMessage?.isEmailValid?.length ? "border-2 border-red-600" : ""
          } p-2 bg-[#333] rounded-md`}
        />
        <input
          onFocus={() => setErrorMessage(null)}
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className={`${
            errorMessage?.isPasswordValid?.length
              ? "border-2 border-red-600"
              : ""
          } p-2 bg-[#333] rounded-md`}
        />
        {errorMessage &&
          Object.entries(errorMessage).map(
            ([key, value]) =>
              value?.length && (
                <p
                  key={key}
                  className="text-red-500 font-semibold text-lg py-1"
                >
                  {value}
                </p>
              )
          )}
        <button
          disabled={!(errorMessage === null)}
          onClick={handleButtonClick}
          className="p-4 my-4 bg-red-600 rounded-lg"
        >
          {isSignInForm ? "Login" : "Signup"}
        </button>
        {isSignInForm && (
          <div className="flex justify-between text-[#b3b3b3] font-normal text-base">
            <div className="flex cursor-pointer justify-center items-center gap-1">
              <input type="checkbox" id="remember" className="" />
              <label className="cursor-pointer" htmlFor="remember">
                remember
              </label>
            </div>
            <Link to={"/help"} className="hover:underline">
              Do you need help?
            </Link>
          </div>
        )}
        {isSignInForm && (
          <div className="my-8">
            <span className="text-[#737373] font-normal text-base">
              New to Netflix?{" "}
            </span>
            <Link
              to={"/"}
              onClick={handleSignup}
              className="hover:underline text-white"
            >
              Sign up now
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
