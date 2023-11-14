import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
    const [isSignInForm,setSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="bg-img" />
        </div>
        <form className='absolute bg-black w-3/12 p-12 my-36 mx-auto left-0 right-0 bg-opacity-80 rounded-lg'>
            <h1 className='text-white font-bold text-3xl py-4'>{isSignInForm ?"Sign In":"Sign Up"}</h1>
            {!isSignInForm &&(
            <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-zinc-800 text-zinc-700 cursor-pointer'/>
            )}
            <input type="text" placeholder='Email or Phone number' className='p-4 my-4 w-full bg-zinc-800 text-zinc-700 cursor-pointer '/>

            <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-zinc-800 text-zinc-700 cursor-pointer'/>
            <button className='bg-red-500 text-white p-4 w-full my-6 cursor-pointer'>{isSignInForm ?"Sign In":"Sign Up"}</button>
            <input type="checkbox" className=''/>
            <label className='text-gray-400'>Remember me</label>
            {/* <p className='text-gray-400 '>Need help?</p> */}
            <p className='text-gray-400 m-4 p-2 cursor-pointer'>New to Netflix?<span className='text-white text-md' onClick={toggleSignInForm}>{isSignInForm ?"Sign Up":"Sign In"}</span></p>
            <p className='text-gray-400 mx-4 text-sm px-2'>This page is protected by Google reCAPTCHA to ensure you're not a boot.<span className='text-blue-600'>Learn More</span></p>
        </form>
    </div>
  )
}

export default Login;