import React from 'react'
import Header from '../Header';
import devices from '../../assets/Devices.png';
import { Link } from 'react-router-dom';

const SignupStep1 = ({isSignInForm, setIsSignInForm}) => {
  return (
    <div className='w-full relative'>
        <Header isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm} />
        <div className='px-28 py-20 absolute my-[200px] mx-[400px] right-0 left-0'>
            <div className='w-[400px]'>
                <div className='w-full flex flex-col text-center gap-4'>
                    <div className='w-full'>
                        <img src={devices} alt='device logo'/>
                    </div>
                    <span>STEP <strong>1</strong> OF <strong>3</strong></span>
                    <h1 className='text-black font-bold text-4xl'>Finish setting up your account</h1>
                    <div className='w-[300px] ml-10 px-6 text-lg flex justify-center items-center'><span>Netflix is personalised for you. Create a password to watch on any device at any time.</span></div>
                </div>
                <div className='w-full mt-6'>
                    <Link 
                    to={'/login'}
                    className='w-full py-4 rounded-lg text-2xl 
                    flex bg-red-600 justify-center items-center 
                    text-white font-medium'>Next</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignupStep1;