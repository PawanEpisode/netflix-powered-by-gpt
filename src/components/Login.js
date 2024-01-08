import React from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';

const Login = ({isSignInForm, setIsSignInForm}) => {

  const handleSignup = () => {
    setIsSignInForm(false);
  }
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
      <form className='absolute rounded-md flex text-white 
      flex-col gap-4 px-20 my-40 mx-auto right-0 left-0 
      py-16 w-[450px] bg-black bg-opacity-75'>
        <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 bg-[#333] rounded-md'/>}
        <input type='text' placeholder='Email Address' className='p-2 bg-[#333] rounded-md'/>
        <input type='password' placeholder='Password' className='p-2 bg-[#333] rounded-md'/>
        <button className='p-4 my-6 bg-red-600 rounded-lg'>{isSignInForm ? "Login": "Signup"}</button>
        {isSignInForm && <div className='flex justify-between text-[#b3b3b3] font-normal text-base'>
          <div className='flex cursor-pointer justify-center items-center gap-1'>
            <input type='checkbox' id='remember' className=''/>
            <label className='cursor-pointer' htmlFor='remember'>remember</label>
          </div>
          <Link to={'/help'} className='hover:underline'>Do you need help?</Link>
        </div>}
        {isSignInForm && (
          <div className='my-8'>
            <span className='text-[#737373] font-normal text-base'>New to Netflix? </span>
            <Link 
              to={"/"} 
              onClick={handleSignup}
              className='hover:underline text-white'>Sign up now</Link>
        </div>
        )}
      </form>
    </div>
  )
}

export default Login;