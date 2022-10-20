import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import movies from '../../utils/mock';
console.log(movies[0]);

const Movies = () => {
  return (
    <main>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  )
};

export default Movies;
