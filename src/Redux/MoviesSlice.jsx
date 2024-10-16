import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],  
    selectedMovie: null, 
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload; 
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    }
  },
});

export const { setMovies, setSelectedMovie} = moviesSlice.actions;
export default moviesSlice.reducer;
