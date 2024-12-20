// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhXYaKrg1PSnWnD7YttcxC8xfEJwpSh_I",
  authDomain: "react-netflix-practise.firebaseapp.com",
  projectId: "react-netflix-practise",
  storageBucket: "react-netflix-practise.appspot.com",
  messagingSenderId: "1022213862597",
  appId: "1:1022213862597:web:80b2e10e9813179d99ecac",
  measurementId: "G-6J1E5QHXW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();