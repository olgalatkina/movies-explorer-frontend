import {useLocation} from 'react-router-dom';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import movies from '../../utils/mock';

const SavedMovies = () => {
  const { pathname } = useLocation();
  console.log('pathname: ', pathname);

  return (
    <div className='movies'>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </div>
  )
};

export default SavedMovies;
