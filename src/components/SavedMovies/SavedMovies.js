import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const SavedMovies = ({savedMovies, isLoading}) => {
  return (
    <main>
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList movies={savedMovies} />}
    </main>
  )
};

export default SavedMovies;
