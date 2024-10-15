import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full px-2 mx-auto py-6 md:px-4 bg-gradient-to-b from-blue-700 to-blue-900 flex flex-col justify-center items-center">
      <div className="flex items-center gap-2 text-lg md:text-xl font-bold text-white">
        {/* Logo */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrG0Iw0MZ1LcCQDqzO9qW5dOxum0tE_prhvg&s"
          alt="Movie camera logo"
          className="w-10 h-10 rounded-full"
        />
        <Link to={"/"} className="text-white hover:text-gray-300">MovieFlix</Link>
      </div>
        <div className="mx-auto flex flex-col items-center justify-center text-gray-400 mt-4 break-words text-sm md:text-base">
            <p>All rights reserved. ©2024 <Link to='/' className="hover:underline text-gray-200">MovieFlix.</Link></p>
            <p>Powered by <a href="https://www.omdbapi.com/" className="hover:underline text-gray-200">OMDB API</a></p>
        </div>
    </div>
  );
};

export default Footer;
