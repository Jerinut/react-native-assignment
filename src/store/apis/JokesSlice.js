import axios from 'axios';

const BASE_URL = 'https://api.chucknorris.io/jokes/'
const {createSlice, createAsyncThunk, isRejectedWithValue} = require ('@reduxjs/toolkit');
export const fetchRandomJoke = createAsyncThunk("fetch Jokes",async () =>{
    try{
        const res = await axios.get(`${BASE_URL}random`);
        return res.data;
    }catch(err){
       console.error(err.message)
       return isRejectedWithValue(err);
    }
    
}
)

export const fetchJokeWithTextInput = createAsyncThunk("fetch Jokes with Text ",async ({searchText},{rejectWithValue}) =>{
    try{
        console.log(searchText,"searcText")
        const res = await axios.get(`${BASE_URL}search?query=${searchText}`);
        return res.data;
    }catch(err){
       console.error(err.message)
       return isRejectedWithValue(err);
    }
    
})


const JokeSlice = createSlice({
  name:'joke',
  initialState:{  
    data:null,
    isLoading:false,
    isError:false,
    searchText:""
  },
  reducers: {
    // reducer to clear the state 
    clearState: (state) => {
      state.data = null;
      state.isLoading = false;
      state.isError = false;
      state.searchText = "";
    },
  },

  extraReducers: builder =>{
   builder.addCase(fetchRandomJoke.pending,(state,action)=>{
    state.isLoading = true
   });
   builder.addCase(fetchRandomJoke.fulfilled,(state,action)=>{
    state.isLoading = false;
    state.data = action.payload});

    builder.addCase(fetchRandomJoke.rejected,(state,action)=>{
        state.isLoading = false;
        state.isError= true;       
   });

   builder.addCase(fetchJokeWithTextInput.pending,(state,action)=>{
    state.isLoading = true
   });

   builder.addCase(fetchJokeWithTextInput.fulfilled,(state,action)=>{
    state.isLoading = false;
    state.data = action.payload});

    builder.addCase(fetchJokeWithTextInput.rejected,(state,action)=>{
        state.isLoading = false;
        state.isError= true;       
   });
   
  },
}
)

export default JokeSlice.reducer
