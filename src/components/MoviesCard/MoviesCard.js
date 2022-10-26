import { useState, useContext, useEffect }  from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import MainApi from '../../utils/MainApi';
import './MoviesCard.css';
import { formatDuration } from '../../utils/utils';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const MoviesCard = ({ movie, saveStatus }) => {
  const { nameRU, trailerLink, thumbnail, duration } = movie;
  const { pathname } = useLocation();
  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [mainApiId, setMainApiId] = useState('');

  useEffect(() => {
    setIsSaved(saveStatus.isSaved);
    setMainApiId(saveStatus.id);
  }, [saveStatus]);

  const handleSaveMovie = () => {
    MainApi.saveMovie(movie)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
        setIsSaved(true);
      })
      .catch((err) => console.log(err))
  };

  const handleDeleteMovie = () => {
    MainApi.deleteMovie(mainApiId)
      .then(() => {
        setSavedMovies(savedMovies.filter((data) => {
          return !(data._id === mainApiId);
        }));
        setIsSaved(false);
      })
      .catch((err) => console.log(err))
  };

  const cardBtnClassNames = cn('card__button', {
    'card__button_saved': pathname === '/movies' && isSaved,
    'card__button_delete': pathname === '/saved-movies',
  });

  return (
    <li className='card'>
      <a className='card__link' href={trailerLink} target='_blank' rel='noreferrer'>
        <img
          className='card__cover'
          src={thumbnail}
          alt={nameRU}
        />
      </a>
      <div className='card__info'>
        <div className="card__wrapper">
          <p className='card__title'>{nameRU}</p>
          <button
            className={cardBtnClassNames}
            type='button'
            aria-label={'save movie'}
            onClick={isSaved ? handleDeleteMovie : handleSaveMovie}
          />
        </div>
        <p className='card__duration'>{formatDuration(duration)}</p>
      </div>
    </li>
  )
}

export default MoviesCard;
