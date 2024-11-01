import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieseducer from './movieSlice';
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: movieseducer
            ,
        }
    }
)

export default appStore;