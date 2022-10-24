import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {
  const { pathname } = useLocation();

  const handleMoreBtnClick = () => {};

  return (
    <section className='cards'>
      <div className='cards__content'>
        <p className='cards__search-message' />
        <ul className='cards__list'>
          {movies.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </ul>
        {pathname === '/movies' && movies.length
          ?
          <button
            className='cards__more-btn button'
            type='button'
            onClick={handleMoreBtnClick}
          >
            Ещё
          </button>
          : ''}
      </div>
    </section>
  )
};

export default MoviesCardList;
