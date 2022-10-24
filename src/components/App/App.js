import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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
  const [loggedIn, setLoggedIn] = useState(false);
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
    message: '',
    isSuccess: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      MainApi.setToken();
      MainApi.getUserInfo()
        .then((me) => {
          setCurrentUser(me);
        })
        .catch((err) => console.log(err))
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
        .catch((err) => {
          console.log(err);
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
      .catch((err) => console.log(err))
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
        navigate('/movies');
      })
      .catch((err) => {
        setTooltipSettings({
          message: err.message,
          isSuccess: false,
        });
        handleInfoTooltip();
      });
  }

  const handleRegister = (name, email, password) => {
    MainApi
      .register(name, email, password)
      .then(() => {
        setTooltipSettings({
          message: 'Вы успешно зарегистрировались!',
          isSuccess: true,
        });
        handleInfoTooltip();
      })
      .catch((err) => {
        setTooltipSettings({
          message: err.message,
          isSuccess: false,
        });
        handleInfoTooltip();
      })
      .finally(() => {});
  }

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
            element={
              loggedIn ?
              <Navigate to="/" />
              :
              <Login handleLogin={handleLogin} />
            }
          />
          <Route
            path='/signup'
            element={
              loggedIn ?
              <Navigate to="/" />
              :
              <Register handleRegister={handleRegister} />}
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
                <Movies allMovies={allMovies} isLoading={isLoading}/>
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            exact path='/saved-movies'
            element={
              <ProtectedRoute loggedIn={loggedIn} >
                <Header loggedIn={loggedIn} />
                <SavedMovies savedMovies={savedMovies} isLoading={isLoading}/>
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
