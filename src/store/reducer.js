import { combineReducers } from 'redux';
import { FETCH_RANDOM_JOKE, FETCH_CUSTOM_JOKE, FETCH_JOKES_BATCH, SET_LOADING } from './actions';

const initialState = {
  randomJoke: '',
  customJoke: '',
  jokeList: [],
}