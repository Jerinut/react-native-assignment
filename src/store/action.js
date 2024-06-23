import axios from 'axios';

export const FETCH_RANDOM_JOKE = 'FETCH_RANDOM_JOKE';
export const FETCH_CUSTOM_JOKE = 'FETCH_CUSTOM_JOKE';
export const FETCH_JOKES_BATCH = 'FETCH_JOKES_BATCH';
export const SET_LOADING = 'SET_LOADING';

const API_URL = 'https://api.chucknorris.io/jokes';

export const fetchRandomJoke = () => async dispatch => {
  try {
    const response = await axios.get(`${API_URL}/random`);
    dispatch({ type: FETCH_RANDOM_JOKE, payload: response.data.value });
  } catch (error) {
    console.error(error);
  }
};

export const fetchCustomJoke = (firstName, lastName) => async dispatch => {
  try {
    const response = await axios.get(`${API_URL}/random?name=${firstName}+${lastName}`);
    dispatch({ type: FETCH_CUSTOM_JOKE, payload: response.data.value });
  } catch (error) {
    console.error(error);
  }
};

export const fetchJokesBatch = () => async dispatch => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await axios.get(`${API_URL}/random?count=10`);
    dispatch({ type: FETCH_JOKES_BATCH, payload: response.data.map(joke => joke.value) });
  } catch (error) {
    console.error(error);
  }
  dispatch({ type: SET_LOADING, payload: false });
};
