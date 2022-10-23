import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import movies from '../../utils/mock';

const SavedMovies = () => {
  return (
    <main>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  )
};

export default SavedMovies;
