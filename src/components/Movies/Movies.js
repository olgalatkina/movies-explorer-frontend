import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const Movies = ({allMovies, isLoading}) => {
  const handleSubmitSearch = () => {};

  return (
    <main>
      <SearchForm handleSubmitSearch={handleSubmitSearch} />
      {isLoading ? <Preloader /> : <MoviesCardList movies={allMovies} />}
    </main>
  )
};

export default Movies;
