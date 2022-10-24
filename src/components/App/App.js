import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchResultAll, setSearchResultAll] = useState({
    keyWord: '',
    result: [],
    isShort: false,
  });
  const [searchResultSaved, setSearchResultSaved] = useState({
    keyWord: '',
    result: [],
    isShort: false,
  });
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [tooltipSettings, setTooltipSettings] = useState({
    message: 'test',
    isSuccess: false,
  });

  const navigate = useNavigate();

  // Auth


  const handleInfoTooltip = () => setInfoTooltipPopupOpen(true);

  const closeAllPopups = () => {
    setInfoTooltipPopupOpen(false);
  }

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  };

  const signOut = () => {
    localStorage.clear();
    navigate('/');
    setLoggedIn(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                <Header loggedIn={loggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            exact path='/movies'
            element={
              <>
                <Header loggedIn={loggedIn} />
                <Movies allMovies={allMovies} />
                <Footer />
              </>
            }
          />
          <Route
            exact path='/saved-movies'
            element={
              <>
                <Header loggedIn={loggedIn} />
                <SavedMovies savedMovies={savedMovies} />
                <Footer />
              </>
            }
          />
          <Route
            exact path='/profile'
            element={
              <>
                <Header loggedIn={loggedIn} />
                <Profile />
              </>
            }
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>

        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          tooltipSettings={tooltipSettings}
          onOverlayClick={handleOverlayClick}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
