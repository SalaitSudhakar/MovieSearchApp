import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovies } from "../Components/FetchMovies";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMovie } from "../Redux/MoviesSlice";
import { FaStar } from "react-icons/fa";
import { TbChairDirector, TbNote } from "react-icons/tb";
import { RiMovie2Fill } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";
import { BiSolidMovie } from "react-icons/bi";

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
    <div className="movie-details flex flex-col items-center justify-center p-3 md:p-6 bg-gray-200 ">
      <div className="container p-3 pt-4 w-full md:w-[80%] lg:w-[60%] bg-slate-300 border-2 border-b-0 border-black shadow-md shadow-blue-900 rounded-md rounded-b-none">
      <img
        src={clickedMovie.Poster}
        alt={clickedMovie.Title}
        className="w-full mx-auto h-80 object-contain my-4 rounded-lg"
      />
       <h1 className="text-2xl font-bold text-center pb-12 text-red-900">{clickedMovie.Title}</h1>
       <hr className="border-t-2 border-black w-20 mx-auto border-dashed"/>
       </div>

      <div className="container w-full md:w-[80%] lg:w-[60%] mx-auto  m-8 pt-6 mt-0 break-words p-3 md:px-24 border-2 border-black border-t-0 rounded-md rounded-t-none bg-gray-300 shadow-lg shadow-blue-900">
        <h3 className="text-xl font-bold  text-emerald-900 inline pb-8">Movie Details <BiSolidMovie className="inline text-black"/> :-</h3>
        <div className="text-lg py-4 ">
          <strong className="text-blue-900">Plot <MdLocalMovies className="inline text-black"/> :</strong> 
          <p className="py-2">{clickedMovie.Plot}</p>
        </div>
        <div className="text-lg py-4 ">
          <strong className="text-blue-900">Released <RiMovie2Fill className="inline text-black"/> :</strong> 
          <p className="py-2">{clickedMovie.Released}</p>
        </div>
        <div className="text-lg py-4">
          <strong className="text-blue-900">Director <TbChairDirector className="inline text-black"/> :</strong> 
          <p className="py-2">{clickedMovie.Director}</p>
        </div>
        <div className="text-lg py-4 ">
          <strong className="text-blue-900">Genre <TbNote className="inline text-black"/> :</strong> 
          <p className="py-2">{clickedMovie.Genre}</p>
        </div>
        <div className="text-lg py-4 ">
          <strong className="text-blue-900">Actors <FaStar className="inline text-slate-400 "/> :</strong> 
          <p className="py-2">{clickedMovie.Actors}</p>
        </div>
        <div className="text-lg py-4 ">
          <strong className="text-blue-900">IMDB Rating <FaStar className="inline text-yellow-500"/> : </strong> 
          <p className="py-2">{clickedMovie.imdbRating}/10</p>
        </div>
        {/* Add more movie details as needed */}
      </div>
    </div>
  );
};

export default MovieDetails;
