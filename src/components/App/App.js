import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route
          path='/signin'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<Register />}
        />
        <Route
          exact path='/'
          element={<Main />}
        />
        <Route
          exact path='/movies'
          element={<Movies />}
        />
        <Route
          exact path='/saved-movies'
          element={<SavedMovies />}
        />
        <Route
          exact path='/profile'
          element={<Profile />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};

export default App;
