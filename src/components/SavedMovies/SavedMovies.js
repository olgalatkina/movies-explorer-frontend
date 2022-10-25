import { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies } from '../../utils/utils';

const SavedMovies = () => {
  const { savedMovies } = useContext(CurrentUserContext);
  const [movies, setMovies] = useState([]);
  const [searchResult, setSearchResult] = useState({
    keyWord: '',
    isShort: false,
  });

  useEffect(() => {
    setMovies(savedMovies);
    setFilteredMovies(searchResult.keyWord, searchResult.isShort)
  }, [savedMovies]);

  const setFilteredMovies = (keyWord, isShort) => {
    const filteredMovies = filterMovies(savedMovies, keyWord, isShort);
    setMovies(filteredMovies);
  };

  const handleSubmitSearch = (keyWord) => {
    setSearchResult({...searchResult, keyWord: keyWord});
    setFilteredMovies(searchResult.keyWord, searchResult.isShort);
  };

  const handleChangeCheckbox = (isChecked) => {
    setSearchResult({...searchResult, isShort: isChecked});
    setFilteredMovies(searchResult.keyWord, isChecked);
  };

  return (
    <main>
      <SearchForm handleSubmitSearch={handleSubmitSearch} handleChangeCheckbox={handleChangeCheckbox} />
      <MoviesCardList movies={movies} />
    </main>
  )
};

export default SavedMovies;
