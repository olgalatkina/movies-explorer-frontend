import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Breakpoint, Length } from '../../utils/constants';

const MoviesCardList = ({ movies }) => {
  const { pathname } = useLocation();
  const windowWidth = window.innerWidth;

  const [isMoreButton, setIsMoreButton] = useState(false);
  const [chunkLength, setChunkLength] = useState(0);

  useEffect(() => {
    if (pathname === '/movies' ) {
      movies.length > chunkLength ? setIsMoreButton(true) : setIsMoreButton(false);
    } else {
      setIsMoreButton(false);
    }
  }, [pathname, movies.length, chunkLength]);

  useEffect(() => {
    if (windowWidth <= Breakpoint.MOBILE && movies.length >= Length.MOBILE) {
      setChunkLength(Length.MOBILE);
    } else if (windowWidth <= Breakpoint.TABLET && movies.length >= Length.TABLET) {
      setChunkLength(Length.TABLET);
    } else if (windowWidth <= Breakpoint.DESKTOP && movies.length >= Length.DESKTOP) {
      setChunkLength(Length.DESKTOP);
    } else {
      setChunkLength(movies.length);
    }
  }, [windowWidth, movies.length]);

  const handleMoreBtnClick = () => {
    setChunkLength((current) => {
      if (windowWidth <= Breakpoint.TABLET) {
        return current + 2;
      } else {
        return current + 3;
      }
    })
  };

  return (
    <section className='cards'>
      <div className='cards__content'>
        <p className='cards__search-message' />
        <ul className='cards__list'>
          {movies.length ? movies.slice(0, chunkLength).map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
            />
          )) : ''}
        </ul>
        {isMoreButton ?
          <button
            className='cards__more-btn button'
            type='button'
            onClick={handleMoreBtnClick}
          >
            Ещё
          </button> : ''}
      </div>
    </section>
  )
};

export default MoviesCardList;
