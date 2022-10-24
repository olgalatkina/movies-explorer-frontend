import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

// const movies = [];
import mock from '../../utils/mock';
const movies = mock;

const Movies = () => {
  const handleSubmitSearch = () => {};

  return (
    <main>
      <SearchForm handleSubmitSearch={handleSubmitSearch} />
      <MoviesCardList movies={movies} />
    </main>
  )
};

export default Movies;
