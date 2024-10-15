import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import FavoritesPage from './Pages/FavoritesPage';
import MovieDetails from './Pages/MovieDetailsPage';
import PageNotFound from './Pages/PageNotFound';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;