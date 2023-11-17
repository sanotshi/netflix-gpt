import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utilities/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <div className='flex  '> 
        <img className="w-44 m-2"src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
        { user &&(
         <ul className='flex text-white list-none p-8 cursor-pointer '>
        <li className='px-2 text-lg'>Home</li>
        <li className='px-2 text-lg'>Tv Shows</li>
        <li className='px-2 text-lg'>Movies</li>
        <li className='px-2 text-lg' >New & Popular</li>
        </ul>
        )}
        </div>
        { user &&(    
        <div className='flex p-4   '>
          <img className="p-2 w-14 h-14 cursor-pointer"src="https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4"
          alt="userIcon"/>
          <button onClick={handleSignOut}className='text-white border  px-2  bg-red-500 rounded-md'>SignOut</button>
        </div>
        )} 
    </div>
  )
}

export default Header