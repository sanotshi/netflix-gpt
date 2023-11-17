import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import {   onAuthStateChanged } from "firebase/auth";
import { auth } from '../utilities/firebase';
import { useDispatch } from 'react-redux';
import {addUser,removeUser} from "../utilities/userSlice";

const Body = () => {
    const dispatch=useDispatch();
   

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browser",
            element:<Browse />
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             
              const {uid,email,displayName} = user;     //when user will Sign in/Sign up this will call
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            
            } else {
             dispatch(removeUser()); // User is signed out
        
            }
          });
    },[])
  return (
    <div>
<RouterProvider router={appRouter} />
    </div>
  )
}

export default Body