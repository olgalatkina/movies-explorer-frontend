import { useState, useEffect } from 'react';
import { SearchMessage } from '../../utils/constants';
import { filterMovies } from '../../utils/utils';
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
  // надо добавить вывод строки

  const storageAllMovies = JSON.parse(localStorage.getItem('allMovies')) || [];
  // console.log('storageAllMovies: ', storageAllMovies);

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
    return new Promise((resolve) => {
      const filteredMovies = keyWord
        ? filterMovies(storageAllMovies, keyWord, isShortMovies)
        : [];
      resolve(filteredMovies);
    })
  };

  const handleSetMovies = (movies) => {
    movies.length === 0 ? setIsNothingFound(true) : setIsNothingFound(false);
    setSearchedMovies(movies);
    localStorage.setItem('storageSearchResult', JSON.stringify(movies));
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

  const renderMovies = () => {

  };

  return (
    <main>
      <SearchForm
        handleSubmitSearch={handleSubmitSearch}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      {isLoading
        ? <Preloader />
        : <MoviesCardList movies={searchedMovies} />}
    </main>
  )
};

export default Movies;
