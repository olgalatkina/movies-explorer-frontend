import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import movies from '../../utils/mock';
console.log(movies[0]);

const Movies = () => {
  return (
    <div className='movies'>
      <Header />
      <main className='movies__main'>
        <SearchForm />
        <MoviesCardList movies={movies} />
      </main>
      <Footer />
    </div>
  )
};

export default Movies;
