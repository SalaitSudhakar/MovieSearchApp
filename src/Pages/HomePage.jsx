import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../Redux/MoviesSlice'; 
import { fetchMovies } from '../Components/FetchMovies'; 
import MovieCard from '../Components/MovieCard';
import Pagination from '../Components/Pagination';

const HomePage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies); 
    const [curPage, setCurPage] = useState(1);
    const totalPages = 2;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurPage(page);
        }
    };

    useEffect(() => {
        const getMovies = async () => {
            try {
                const searchTerm = 'all';     
                const data = await fetchMovies(searchTerm); 
                if (data) {
                  dispatch(setMovies(data));
                 } 
                
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        getMovies();
    }, [curPage, dispatch]); // Only fetch movies when the current page changes

    return (
        <div className='bg-slate-200'>
            <div className="container pt-8 w-[90%] md:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center ">
               
                {movies && movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))
                ) : (
                    <p>No movies found.</p>
                )}
            </div>
            <Pagination totalPages={totalPages} curPage={curPage} handlePageChange={handlePageChange} />
        </div>
    );
};

export default HomePage;
