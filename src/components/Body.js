import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Signup from "./Signup/Signup";
import SignupStep1 from "./Signup/SignupStep1";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(false);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <Signup isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm} />
      ),
    },
    {
      path: "browse",
      element: <Browse />,
    },
    {
      path: "login",
      element: (
        <Login isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm} />
      ),
    },
    {
      path: "signup",
      element: (
        <SignupStep1
          isSignInForm={isSignInForm}
          setIsSignInForm={setIsSignInForm}
        />
      ),
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="w-full">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
