import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieseducer from './movieSlice';
import gptReducer from './gptSlice';
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: movieseducer,
            gpt: gptReducer,
        }
    }
)

export default appStore;