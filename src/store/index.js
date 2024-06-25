import { configureStore } from "@reduxjs/toolkit";
import JokeReducer from './apis/JokesSlice';

// the redux store is exported 
export const store = configureStore({
    reducer:{
        joke: JokeReducer
    }
})