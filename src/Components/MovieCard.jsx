import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  addToFavourites,
  removeFromFavourites,
} from "../Redux/FavouritesSlice";
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  const isFavourite = favourites.some((fav) => fav.imdbID === movie.imdbID);
  // const loading = useSelector((state) => state.movies.loading); // Example loading state from your MoviesSlice

  const toggleFavourite = (e) => {
    e.stopPropagation();
    if (isFavourite) {
      dispatch(removeFromFavourites(movie.imdbID));
      alert(`"${movie.Title}" removed from favorites`)
    } else {
      dispatch(addToFavourites(movie));
    }
  };

  return (
    <div className="mt--4 md:mt-6 mb-2 md:mb-4 p-4 shadow-lg  bg-gray-100 rounded relative transform transition-transform duration-300 hover:scale-105 border shadow-blue-900">
       <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-52 object-contain mb-4 "
         
        />
      </Link>

      <h2 className="text-lg font-semibold text-center">{movie.Title}</h2>
      <p className="text-gray-500 text-center">{movie.Type}</p>
      <div className="flex items-center justify-between mt-4">
        <span><span className="font-medium">Released Year: </span>{movie.Year}</span>
        <span onClick={toggleFavourite} className="cursor-pointer">
         {(isFavourite) ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart />
          )}
        </span>
      </div>
    </div>
    
  );
};

export default MovieCard;
