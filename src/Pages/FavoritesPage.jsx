import React from 'react';
import MovieCard from '../Components/MovieCard';
import { useSelector } from 'react-redux';
import { FaRegHeart } from 'react-icons/fa';

const FavoritesPage = () => {
    const favorites = useSelector((state) => state.favourites.favourites);

    return (
        <div className='bg-slate-200'>
        <div className='w-[90%] md:w-4/5 lg:w-3/4 mx-auto pt-2 md:pt-8 pb-12'>
            <h1 className="text-2xl font-bold m-8 mb-4 text-blue-900">Favorites</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-44">
                {favorites.length > 0 ? (   
                    favorites.map((favorite) => (
                        <MovieCard key={favorite.imdbID} movie={favorite} />    
                    ))
                   
                ) : (
                    <p className="text-center w-full text-gray-500 col-span-3 justify-self-center self-center ">
                      <span className='pr-1'>No Favourites Added </span>
                      <FaRegHeart className='inline'/>
                    </p>
                )}
             </div>
        </div>
        </div>
    );
};

export default FavoritesPage;
