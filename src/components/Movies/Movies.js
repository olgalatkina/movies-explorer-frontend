import { useState, useEffect } from 'react';
import MoviesApi from '../../utils/MoviesApi';
import { AppMessage, SearchMessage } from '../../utils/constants';
import { filterMovies, normalizeMovies } from '../../utils/utils';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const storageAllMovies = JSON.parse(localStorage.getItem('storageAllMovies')) || [];

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const storageSearchResult = JSON.parse(localStorage.getItem('storageSearchResult')) || [];
    const storageKeyWord = localStorage.getItem('storageKeyWord') || '';
    const storageIsShort = JSON.parse(localStorage.getItem('storageIsShort')) || false;

    storageSearchResult && (storageSearchResult.length === 0
      ? setIsNothingFound(true)
      : setSearchedMovies(storageSearchResult));

    storageKeyWord && setKeyWord(storageKeyWord);
    storageIsShort && setIsShortMovies(storageIsShort);
  }, []);

  const getFilteredMovies = (keyWord, isShortMovies) => {
    // где-то тут по условию, что storageAllMovies пустой надо один раз загрузить все фильмы
    if (!storageAllMovies.length) {
      console.log('storageAllMovies first time');
      MoviesApi.getMovies()
        .then((allMovies) => {
          console.log('from movies api')
          const normalizedMovies = normalizeMovies(allMovies);
          localStorage.setItem('storageAllMovies', JSON.stringify(normalizedMovies));
          return keyWord ? filterMovies(normalizedMovies, keyWord, isShortMovies) : [];
        })
        .catch((err) => {
          console.log('err from catch', err);

          setErrorMessage(SearchMessage.SEARCH_ERROR);
        })
        .finally(() => {
          console.log('from finally');
          return [];
        })
    } else {
      return new Promise((resolve) => {
        const filteredMovies = keyWord
          ? filterMovies(storageAllMovies, keyWord, isShortMovies)
          : [];
        resolve(filteredMovies);
      })
    }
  };

  const handleSetMovies = (movies) => {
    movies.length === 0 ? setIsNothingFound(true) : setIsNothingFound(false);
    setSearchedMovies(movies);
    localStorage.setItem('storageSearchResult', JSON.stringify(movies));

    movies.length === 0 ? setErrorMessage(SearchMessage.NOT_FOUND) : setErrorMessage('');
  };

  const handleSubmitSearch = (keyWord) => {
    setIsLoading(true);
    setKeyWord(keyWord);
    localStorage.setItem('storageKeyWord', keyWord);
    getFilteredMovies(keyWord, isShortMovies)
      .then((movies) => handleSetMovies(movies))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  };

  const handleChangeCheckbox = (isChecked) => {
    setIsLoading(true);
    setIsShortMovies(isChecked);
    localStorage.setItem('storageIsShort', isChecked);
    getFilteredMovies(keyWord, isChecked)
      .then((movies) => handleSetMovies(movies))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  };

  const renderMoviesSection = () => {
    if (errorMessage.length) {
      return <p className='cards__search-message'>{errorMessage}</p>;
    }
    return (
      <MoviesCardList movies={searchedMovies} />
    )
  };

  return (
    <main>
      <SearchForm
        handleSubmitSearch={handleSubmitSearch}
        handleChangeCheckbox={handleChangeCheckbox}
        showError={setErrorMessage}
      />
      {isLoading ? <Preloader /> : renderMoviesSection()}
    </main>
  )
};

export default Movies;
