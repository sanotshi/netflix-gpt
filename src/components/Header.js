import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilities/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USERICON } from "../utilities/constants";
import { toggleGptSearchView } from "../utilities/gptSlice";
import {changeLanguage} from "../utilities/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //  navigate("/")
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user; //when user will Sign in/Sign up this will call
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser()); // User is signed out
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between">
      <div className="flex ">
        <img className="w-28 md:w-44  m-2 mx-auto md:mx-0" src={LOGO} alt="logo" />
        {user && (
          <div>
          <ul className="flex text-white list-none p-4 md:p-8 cursor-pointer hidden md:inline-flex ">
            <li className="px-0 md:px-2 text-md md:text-lg">Home</li>
            <li className="px-0 md:px-2 text-md md:text-lg">Tv Shows</li>
            <li className="px-0 md:px-2 text:md md:text-lg">Movies</li>
            <li className="px-0 md:px-2 text-md md:text-lg">New & Popular</li>
          </ul>
          </div>
        )}
      </div>
      {user && (
       
        <div className="flex p-1 md:p-4 justify-between  ">

         { showGptSearch && <select className="px-1 md:px-2 m-1 md:m-2 bg-slate-600 text-white" onChange={handleLanguageChange}>
           {SUPPORTED_LANGUAGES.map(lang=> 
             <option value={lang.identifier} key={lang.identifier} >
              {lang.name}
            </option> 
             )} 
         </select> }
          <button
            className=" bg-blue-400 text-white px-2 m-2 rounded-lg "
            onClick={handleGptSearchClick}
          >
           {showGptSearch ?"HomePage" : "GPT Search"}
          </button>
          <img
            className="p-2 w-14 h-14 cursor-pointer"
            src={USERICON}
            alt="userIcon"
          />
          <button
            onClick={handleSignOut}
            className="text-white px-3  bg-red-500 rounded-md m-2"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
