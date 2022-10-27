import { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies } from '../../utils/utils';
import { SearchMessage } from '../../utils/constants';

const SavedMovies = () => {
  const { savedMovies } = useContext(CurrentUserContext);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useState({
    keyWord: '',
    isShort: false,
  });

  useEffect(() => {
    setMovies(savedMovies);
    setFilteredMovies(searchParams.keyWord, searchParams.isShort)
  }, [savedMovies]);

  const setFilteredMovies = (keyWord, isShort) => {
    const filteredMovies = filterMovies(savedMovies, keyWord, isShort);
    setMovies(filteredMovies);
  };

  const handleSubmitSearch = (keyWord) => {
    setSearchParams({...searchParams, keyWord: keyWord});
    setFilteredMovies(searchParams.keyWord, searchParams.isShort);
  };

  const handleChangeCheckbox = (isChecked) => {
    setSearchParams({...searchParams, isShort: isChecked});
    setFilteredMovies(searchParams.keyWord, isChecked);
  };

  const renderMoviesSection = () => {
    if (!movies.length && !searchParams.keyWord) {
      return <p className='cards__search-message'>{SearchMessage.NOTHING}</p>;
    }
    if (!movies.length) {
      return <p className='cards__search-message'>{SearchMessage.NOT_FOUND}</p>;
    }
    return (
      <MoviesCardList movies={movies} />
    )
  };

  return (
    <main>
      <SearchForm handleSubmitSearch={handleSubmitSearch} handleChangeCheckbox={handleChangeCheckbox} />
      {renderMoviesSection()}
    </main>
  )
};

export default SavedMovies;
