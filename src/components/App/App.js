import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          exact path='/movies'
          element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          exact path='/saved-movies'
          element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          exact path='/profile'
          element={
            <>
              <Header />
              <Profile />
            </>
          }
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
