import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovies } from "../Components/FetchMovies";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMovie } from "../Redux/MoviesSlice";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const clickedMovie = useSelector((state) => state.movies.selectedMovie);

  useEffect(() => {
    const getMovies = async () => {
      try {
        if (!clickedMovie || clickedMovie.imdbID !== parseInt(id)) {
          // Fetch only if movie data is not available or if id changed
          const data = await fetchMovies("", "", id);
          dispatch(setSelectedMovie(data));
        }
      } catch (error) {
        alert(error.message);
      }
    };

    getMovies();
  }, [id, dispatch, clickedMovie]); // Added dependencies to avoid warning and re-fetching

  if (!clickedMovie) {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <img
          src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
          alt="Loading"
          className="h-96"
        />
      </div>
    );
  }

  return (
    <div className="movie-details flex flex-col items-center justify-center gap-4 p-6 bg-gray-100">
      <div className="container p-3">
      <img
        src={clickedMovie.Poster}
        alt={clickedMovie.Title}
        className="w-full mx-auto h-80 object-contain max-w-sm my-4 rounded-lg"
      />
       <h1 className="text-2xl font-bold text-center pb-4 text-red-900">{clickedMovie.Title}</h1>
       <hr className="border-t-4 w-full md:w-2/3 mx-auto"/>
       </div>
      <div className="container w-[90%] md:w-[80%] lg:w-[70%] mx-auto  m-8 break-words p-2 pt-0 md:px-24">
        <h3 className="text-xl font-bold  text-emerald-900 inline underline">Movie Details:</h3>
        <div className="text-lg py-4 ">
          <strong className="text-blue-900">Plot:</strong> 
          <p className="py-2">{clickedMovie.Plot}</p>
        </div>
        <div className="text-lg py-4 ">
          <strong className="text-blue-900">Released:</strong> 
          <p className="py-2">{clickedMovie.Released}</p>
        </div>
        <div className="text-lg py-4">
          <strong className="text-blue-900">Director:</strong> 
          <p className="py-2">{clickedMovie.Director}</p>
        </div>
        <div className="text-lg py-4 ">
          <strong className="text-blue-900">Genre:</strong> 
          <p className="py-2">{clickedMovie.Genre}</p>
        </div>
        <div className="text-lg py-4 ">
          <strong className="text-blue-900">Actors:</strong> 
          <p className="py-2">{clickedMovie.Actors}</p>
        </div>
        <div className="text-lg py-4 ">
          <strong className="text-blue-900">IMDB Rating:</strong> 
          <p className="py-2">{clickedMovie.imdbRating}</p>
        </div>
        {/* Add more movie details as needed */}
      </div>
    </div>
  );
};

export default MovieDetails;
