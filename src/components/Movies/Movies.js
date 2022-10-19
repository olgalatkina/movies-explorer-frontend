import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const Movies = () => {
  return (
    <div className='movies'>
      <Header />
      <main className='movies__main'>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </div>
  )
};

export default Movies;
