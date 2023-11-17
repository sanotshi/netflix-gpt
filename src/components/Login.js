import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utilities/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate=useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //   console.log(email.current.value)
    //  console.log(password.current.value)
    const message = checkValidData(
      email.current.value,
      password.current.value,
    //   name.current.value
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
          navigate("/browser")           //when you are sign up go to browser page
          console.log(user);
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
           navigate("/browser")     //when user will sign in then go to browser page
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
        <img className="h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12  p-10 my-36 mx-auto left-0 right-0 bg-opacity-80 rounded-lg"
      >
        <h1 className="text-white font-bold text-3xl  py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-zinc-800 text-zinc-400 cursor-pointer"
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
