import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilities/userSlice";
import { LOGO, USERICON } from "../utilities/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user; //when user will Sign in/Sign up this will call
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser()); // User is signed out
        navigate("/");
      }
    });
    return ()=> unsubscribe();
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <div className="flex  ">
        <img
          className="w-44 m-2"
          src={LOGO}
          alt="logo"
        />
        {user && (
          <ul className="flex text-white list-none p-8 cursor-pointer ">
            <li className="px-2 text-lg">Home</li>
            <li className="px-2 text-lg">Tv Shows</li>
            <li className="px-2 text-lg">Movies</li>
            <li className="px-2 text-lg">New & Popular</li>
          </ul>
        )}
      </div>
      {user && (
        <div className="flex p-4   ">
          <img
            className="p-2 w-14 h-14 cursor-pointer"
            src={USERICON}
            alt="userIcon"
          />
          <button
            onClick={handleSignOut}
            className="text-white border  px-2  bg-red-500 rounded-md"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
