import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidaData } from '../utils/validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const email = useRef(null);
    const password = useRef(null);
    const handleButnClick = (e) => {
        e.preventDefault();
        // Validate the form Data
        const message =  checkValidaData(email.current.value,password.current.value);
        console.log(message);
        setErrorMessage(message);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" alt="bgimg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className='p-2 my-2 w-full bg-gray-700' />}
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
