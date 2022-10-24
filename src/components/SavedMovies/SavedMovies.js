import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({savedMovies}) => {
  return (
    <main>
      <SearchForm />
      <MoviesCardList movies={savedMovies} />
    </main>
  )
};

export default SavedMovies;
