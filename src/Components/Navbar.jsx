import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMovies } from "../Redux/MoviesSlice"; 
import { fetchMovies } from './FetchMovies';

const Navbar = () => {
    const [query, setQuery] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const movies = await fetchMovies((query)?query:'all', (selectedType)?selectedType:''); 
            if (movies) {
                dispatch(setMovies(movies));
            } 
            navigate("/")
        } catch (error) {
            alert(error); 
        }        
    };

    const handleDropdownChange = async (e) => {
        const type = e.target.value;
        setSelectedType(type);
        
        try {
            const movies = await fetchMovies((query)?query:'all',type); 
            dispatch(setMovies(movies));
            navigate("/")
        } catch (error) {
            alert(error); 
        }
       
    };

    return (
        <nav className="flex flex-wrap items-center justify-between px-2 p-6 md:px-12 lg:px-20 bg-gradient-to-b from-blue-700 to-blue-900">
            <div className="flex items-center gap-2 text-lg md:text-xl font-bold text-white">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrG0Iw0MZ1LcCQDqzO9qW5dOxum0tE_prhvg&s"
                    alt="Movie camera logo"
                    className="w-10 h-10 rounded-full"
                />
                <Link to="/" className="text-white hover:text-gray-300">MovieFlix</Link>
            </div>

            <div className="space-x-4 font-semibold md:text-lg hover:text-gray-200">
                <Link to="/" className="text-white font-semibold hover:text-slate-300">
                    Home
                </Link>
                <Link to="/favorites" className="text-white font-semibold hover:text-slate-300">
                    Favorites
                </Link>
            </div>

            <div className="flex items-center gap-4 mt-8 w-full justify-center">
                <form className="w-2/3 relative flex items-center" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search Movies..."
                        className="border py-2 px-2 sm:px-4 rounded-md w-full focus:outline-blue-500"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="absolute right-0 pr-3 text-black p-2 rounded-full hover:bg-slate-500 hover:text-white"
                    >
                        <FaSearch />
                    </button>
                </form>

                <select
                    value={selectedType}
                    onChange={handleDropdownChange}
                    className="border p-2 rounded-md focus:outline-blue-500"
                >
                    <option value="">All</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                </select>
            </div>
        </nav>
    );
};

export default Navbar;
