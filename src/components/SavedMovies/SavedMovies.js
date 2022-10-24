import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const movies = [];

const SavedMovies = () => {
  return (
    <main>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  )
};

export default SavedMovies;
