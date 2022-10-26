import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import { AppMessage } from '../../utils/constants';
import { normalizeMovies } from '../../utils/utils';
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
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [error, setError] = useState('');
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [tooltipSettings, setTooltipSettings] = useState({
    message: '',
    isSuccess: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      MainApi.setToken();
      Promise.all([MainApi.getUserInfo(), MainApi.getSavedMovies(), MoviesApi.getMovies()])
        .then(([me, savedMovies, allMovies]) => {
          setCurrentUser(me);
          setSavedMovies(savedMovies);
          const normalizedMovies = normalizeMovies(allMovies);
          localStorage.setItem('allMovies', JSON.stringify(normalizedMovies));
        })
        .catch(() => console.log(AppMessage.BAD_REQUEST))
        .finally(() => {})
    }
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      MainApi
        .checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
        })
        .catch(() => {
          console.log(AppMessage.BAD_REQUEST);
        });
    }
  }, [navigate]);

  const handleInfoTooltip = () => setInfoTooltipPopupOpen(true);

  const closeAllPopups = () => {
    setInfoTooltipPopupOpen(false);
  }

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  };

  const handleUpdateUser = (data) => {
    MainApi
      .changeUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
      })
      .catch(() => {
        setTooltipSettings({
          message: AppMessage.BAD_REQUEST,
          isSuccess: false,
        });
        handleInfoTooltip();
      })
      .finally(() => {
        closeAllPopups();
      })
  };

  const handleLogin = (email, password) => {
    MainApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        setError('');
        navigate('/movies');
      })
      .catch((err) => {
        setTooltipSettings({
          message: AppMessage.BAD_REQUEST,
          isSuccess: false,
        });
        handleInfoTooltip();
        setError(err);
      });
  }

  const handleRegister = (name, email, password) => {
    MainApi
      .register(name, email, password)
      .then(() => {
        setTooltipSettings({
          message: AppMessage.SUCCESS,
          isSuccess: true,
        });
        handleInfoTooltip();
      })
      .catch((err) => {
        setTooltipSettings({
          message: AppMessage.BAD_REQUEST,
          isSuccess: false,
        });
        handleInfoTooltip();
        setError(err);
      })
      .finally(() => {});
  }

  const signOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser, savedMovies, setSavedMovies}}>
      <div className='app'>
        <Routes>
          <Route
            path='/signin'
            element={
              loggedIn ?
              <Navigate to="/" />
              :
              <Login handleLogin={handleLogin} error={error} />
            }
          />
          <Route
            path='/signup'
            element={
              loggedIn ?
              <Navigate to="/" />
              :
              <Register handleRegister={handleRegister} error={error} />}
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
              <ProtectedRoute loggedIn={loggedIn} >
                <Header loggedIn={loggedIn} />
                <Movies />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            exact path='/saved-movies'
            element={
              <ProtectedRoute loggedIn={loggedIn} >
                <Header loggedIn={loggedIn} />
                <SavedMovies />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            exact path='/profile'
            element={
              <ProtectedRoute loggedIn={loggedIn} >
                <Header loggedIn={loggedIn} />
                <Profile signOut={signOut} handleUpdateUser={handleUpdateUser} />
              </ProtectedRoute>
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
