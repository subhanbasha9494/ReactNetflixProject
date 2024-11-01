import React from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LAN } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser((removeUser)));
        navigate("/")
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  return (
    <div className='absolute flex w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between'>
      <img className="w-44" src={LOGO} alt='logo' />
      {user && (<div className='flex p-2'>
        <select className='p-2 m-2 bg-gray-900 text-white'>
          {SUPPORTED_LAN.map((lan) => (
            <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>
          ))}
        </select>
        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>GPT Search</button>
        <button className='font-bold text-white' onClick={handleSignout}>Sign Out</button>
      </div>
      )}
    </div>
  )
}

export default Header
