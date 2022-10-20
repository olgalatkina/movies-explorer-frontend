import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {
  const handleMoreBtnClick = () => {};

  return (
    <section className='cards'>
      <div className='cards__content'>
        <ul className='cards__list'>
          {movies.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </ul>
        <button
          className='cards__more-btn button'
          type='button'
          onClick={handleMoreBtnClick}
        >
          Ещё
        </button>
      </div>
    </section>
  )
};

export default MoviesCardList;
