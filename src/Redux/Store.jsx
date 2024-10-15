import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from './MoviesSlice'
import FavouritesSlice from './FavouritesSlice'

const Store = configureStore({
   reducer: {
      movies: MoviesSlice,
      favourites: FavouritesSlice,
},
}) ;

export default Store;
