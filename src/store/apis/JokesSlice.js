import axios from 'axios';

const BASE_URL = 'https://api.chucknorris.io/jokes/random'
const {createSlice, createAsyncThunk, isRejectedWithValue} = require ('@reduxjs/toolkit');
export const fetchRandomJoke = createAsyncThunk("fetch Jokes",async () =>{
    try{
        const res = await axios.get('https://api.chucknorris.io/jokes/random');
        return res.data;
    }catch(err){
       console.error(err.message)
       return isRejectedWithValue(err);
    }
    
}

)
const JokeSlice = createSlice({
  name:'joke',
  initialState:{  
    data:null,
    isLoading:false,
    isError:false
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
   
  },
}
)

export default JokeSlice.reducer
