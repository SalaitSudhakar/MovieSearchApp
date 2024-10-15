import axios from 'axios';

const API_KEY = 'cdd80f8'; 
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async (searchTerm = 'all', type = '', id = '') => {
    try {
        let url = BASE_URL;

        if (id) {
            // Fetch movie by ID
            url += `&i=${id}`; 
            const response = await axios.get(url); 
            if (response.data.Response === "True") {
                return response.data; 
            } else {
                throw new Error(response.data.Error); 
            }
        } else {
            // Fetch movies by search term
            url += `&s=${searchTerm}`; 

            if (type) {
                url += `&type=${type}`;
            }

            console.log("Fetching movies from URL:", url); 

            const response = await axios.get(url);
            console.log("API Response:", response.data); 

            if (response.data.Response === "True") {
                return response.data.Search
            } else {
                throw new Error(response.data.Error); 
            }
        }
    } catch (error) {
        alert("Error fetching movies:", error.message); 
        throw new Error(`Error fetching movies. Please try again later. ${error.message}`);
    }
};
