import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidaData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG_URL } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const handleButnClick = () => {
        // Validate the form Data
        const message =  checkValidaData(email.current.value,password.current.value);
        //console.log(message);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm) {
            //Signup Logic
           createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
           .then((userCredentail)  => {
            const user = userCredentail.user;
            updateProfile(user, {
                displayName: name.current.value
            })
            .then((userCredential) => {
                const {uid, email, displayName} = auth.currentUser;
                dispatch(addUser({uid: uid,email: email, displayName:displayName}));
                //navigate("/browse")
               })
               .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
               })
           })
           .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage)
           });
        }else{
            //signIn logic
           signInWithEmailAndPassword(auth, email.current.value,password.current.value)
           .then((userCredential) => {
            const user = userCredential.user;
             //navigate("/browse")
           })
           .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage)
           })
        }
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={BG_IMG_URL} alt="bgimg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" ref={name} placeholder="Full Name" className='p-2 my-2 w-full bg-gray-700' />}
                <input ref={email} type="text" placeholder="Email Address" className='p-2 my-2 w-full bg-gray-700' />
                <input ref={password} type="password" placeholder="Password" className='p-2 my-2 w-full bg-gray-700' />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-6 bg-red-700 w-full' onClick={handleButnClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;
