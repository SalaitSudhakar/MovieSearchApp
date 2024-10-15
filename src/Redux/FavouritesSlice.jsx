import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites: [],
};

const FavouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourites: (state, action) => {
            const existingFav = state.favourites.find(movie => movie.imdbID === action.payload.imdbID);
            if (!existingFav) {
                state.favourites.push(action.payload); 
            }
        },
        removeFromFavourites: (state, action) => {
            const id = action.payload;
            const findMovie = state.favourites.find(item => item.imdbID === id);
            if (findMovie) {
                state.favourites = state.favourites.filter(movie => movie.imdbID !== id);
            }
        },
    },
});

export const { addToFavourites, removeFromFavourites } = FavouritesSlice.actions;
export default FavouritesSlice.reducer;
