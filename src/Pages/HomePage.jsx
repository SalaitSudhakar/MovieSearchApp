import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  setMovies } from '../Redux/MoviesSlice'; 
import { fetchMovies } from '../Components/FetchMovies'; 
import MovieCard from '../Components/MovieCard';
import Pagination from '../Components/Pagination';

const HomePage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies); 
    const [curPage, setCurPage] = useState(1);
    const [pageLoading, setPageLoading ] = useState(false); 
    const moviesPerPage = 5;
    const totalPages = Math.ceil(movies.length / moviesPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurPage(page);
        }
    };

    useEffect(() => {
        const getMovies = async () => {
            if (!movies || movies.length === 0){
                try {
                    const searchTerm = 'all';  
                    setPageLoading(true);   
                    const data = await fetchMovies(searchTerm); 
                    if (data) {
                      dispatch(setMovies(data));
                     } 
                    
                } catch (error) {
                    console.error("Error fetching movies:", error);
                }
                setPageLoading(false);
            }
           
        };

        getMovies();
    }, [curPage, dispatch, movies.length]); // Only fetch movies when the current page changes


    const startIndex = (curPage - 1) * moviesPerPage;
    const paginatedMovies = movies.slice(startIndex, startIndex + moviesPerPage);


    return (

        (pageLoading)? 
        ( <div className="relative h-screen"> {/* Added relative positioning */}
            <div className="absolute inset-0 bg-black bg-opacity-25"> {/* Changed to absolute */}
              <div className='flex justify-center items-center h-full gap-1'>
                <div className='w-2 h-2 rounded-full border-2 border-black animate-wave-1 bg-blue-900'></div>
                <div className='w-2 h-2 rounded-full border-2 border-black animate-wave-2 bg-blue-900'></div>
                <div className='w-2 h-2 rounded-full border-2 border-black animate-wave-3 bg-blue-900'></div>
              </div>
            </div>
          </div>)
        :(<div className='bg-slate-200'>
            <div className="container pt-8 w-[90%] md:w-3/5 mx-auto grid grid-cols-1 sm:grid-cols-2  gap-12 items-center place-self-center">
               
                {paginatedMovies && paginatedMovies.length > 0 ? (
                    paginatedMovies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))
                ) : (
                    <div className="flex justify-center w-full items-center">
                    <img
                      src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
                      alt="Loading"
                      className="h-96"
                    />
                  </div>
                )}
            </div>
            <Pagination totalPages={totalPages} curPage={curPage} handlePageChange={handlePageChange} />
        </div>)
    );
};

export default HomePage;
