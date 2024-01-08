import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Signup from "./Signup/Signup";
import SignupStep1 from "./Signup/SignupStep1";

const Body = () => {
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
          <SignupStep1 isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm} />
        ),
      },
  ]);

  return (
    <div className="w-full">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
