import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utilities/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { BG_URL } from "../utilities/constants";



const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
const navigate=useNavigate()

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //   console.log(email.current.value)
    //  console.log(password.current.value)
    const message = checkValidData(
      email.current.value,
      password.current.value,
    );
     setErrorMessage(message);
    
    if (message) return;

    //sign in sign up logic
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    } else {
      //sign in logic
       signInWithEmailAndPassword(
         auth,
         email.current.value,
         password.current.value
       )
         .then((userCredential) => {
           const user = userCredential.user;
            //when user will sign in then go to browser page
           console.log(user);
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode + "" + errorMessage);
         });
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:h-full"
          src={BG_URL}
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-auto md:w-3/12  md:mt-[10%]  md:h-100 p-8 md:p-10 m-16 md:my-36 mx-auto left-0 right-0 bg-opacity-80 rounded-lg"
      >
        <h1 className="text-white font-bold text-xl md:text-3xl py-0 md:py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4  md:w-full bg-zinc-800 text-zinc-400 cursor-pointer"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone number"
          className="p-4 my-4 w-full bg-zinc-800 text-zinc-400 cursor-pointer "
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-zinc-800 text-zinc-400 cursor-pointer"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="bg-red-500 text-white p-4 w-full my-6 cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <input type="checkbox" className="" />
        <label className="text-gray-400">Remember me</label>
        {/* <p className='text-gray-400 '>Need help?</p> */}
        <p className="text-gray-400 m-4 p-2 cursor-pointer">
          New to Netflix?
          <span className="text-white text-md" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>
        </p>
        <p className="text-gray-400 mx-4 text-sm px-2">
          This page is protected by Google reCAPTCHA to ensure you're not a
          boot.<span className="text-blue-600">Learn More</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
