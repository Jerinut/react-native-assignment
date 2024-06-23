import { configureStore } from "@reduxjs/toolkit";
import JokeReducer from './apis/JokesSlice';

export const store = configureStore({
    reducer:{
        joke: JokeReducer
    }
})