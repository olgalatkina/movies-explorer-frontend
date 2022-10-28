import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
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
  const [loggedIn, setLoggedIn] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);
  const [error, setError] = useState('');
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tooltipSettings, setTooltipSettings] = useState({
    message: '',
    isSuccess: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      MainApi.setToken();
      Promise.all([MainApi.getUserInfo(), MainApi.getSavedMovies()])
        .then(([me, apiSavedMovies]) => {
          setCurrentUser(me);
          setSavedMovies(apiSavedMovies.filter((film) => film.owner === me._id));
        })
        .catch(async (err) => {
          const { message } = await err.json();
          setTooltipSettings({
            message,
            isSuccess: false,
          });
          setInfoTooltipPopupOpen(true);
          setError(AppMessage.ERROR); // ??
        })
        .finally(() => {})
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      MainApi.setToken();
      MoviesApi.getMovies()
        .then((allMovies) => {
          const normalizedMovies = normalizeMovies(allMovies);
          localStorage.setItem('storageAllMovies', JSON.stringify(normalizedMovies));
        })
        .catch((err) => {
          console.log('err', err)
          setTooltipSettings({
            message: AppMessage.ERROR,
            isSuccess: false,
          });
          setInfoTooltipPopupOpen(true);
          setError(AppMessage.ERROR);
        })
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
          signOut();
        });
    }
  }, [navigate]);

  const closeAllPopups = () => {
    setInfoTooltipPopupOpen(false);
    setIsMenuOpen(false);
  }

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  };

  const handleLogin = (email, password) => {
    setIsLoading(true);
    MainApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        setTooltipSettings({
          message: AppMessage.SUCCESS,
          isSuccess: true,
        });
        setInfoTooltipPopupOpen(true);
      })
      .catch(async (err) => {
        const { message } = await err.json();
        setTooltipSettings({
          message,
          isSuccess: false,
        });
        setInfoTooltipPopupOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleRegister = (name, email, password) => {
    setIsLoading(true);
    MainApi
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch(async (err) => {
        const { message } = await err.json();
        setTooltipSettings({
          message,
          isSuccess: false,
        });
        setInfoTooltipPopupOpen(true)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const signOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    setIsLoading(false);
    closeAllPopups();
    setError('');
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
              <Navigate to='/movies' />
              :
              <Login handleLogin={handleLogin} isLoading={isLoading} />
            }
          />
          <Route
            path='/signup'
            element={
              loggedIn ?
              <Navigate to='/movies' />
              :
              <Register handleRegister={handleRegister} isLoading={isLoading} />}
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute loggedIn={loggedIn} >
                <Header
                  loggedIn={loggedIn}
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                  handleOverlayClick={handleOverlayClick}
                />
                <Movies />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute loggedIn={loggedIn} >
                <Header
                  loggedIn={loggedIn}
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                  handleOverlayClick={handleOverlayClick}
                />
                <SavedMovies />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute loggedIn={loggedIn} >
                <Header
                  loggedIn={loggedIn}
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                  handleOverlayClick={handleOverlayClick}
                />
                <Profile
                  signOut={signOut}
                  setTooltipSettings={setTooltipSettings}
                  setInfoTooltipPopupOpen={setInfoTooltipPopupOpen}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact path='/'
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                  handleOverlayClick={handleOverlayClick}
                />
                <Main />
                <Footer />
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
