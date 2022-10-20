import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movies from '../../utils/mock';
console.log(movies[0]);

const MoviesCardList = ({ movies }) => {
  return (
    <section className='cards'>
      <div className='cards__content'>
        <ul className='cards__list'>
          <MoviesCard />
          {/*{movies.map((movie) => (*/}
          {/*  <MoviesCard*/}
          {/*    key={`${movie.id}-${movie.name}`}*/}
          {/*    movie={movie}*/}
          {/*  />*/}
          {/*))}*/}
        </ul>
        <button
          className='cards__more-btn button'
          type='button'
        >
          Ещё
        </button>
      </div>
    </section>
  )
};

export default MoviesCardList;
