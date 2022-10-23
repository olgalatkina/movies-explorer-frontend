import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import './MoviesCard.css';
import { formatDuration } from '../../utils/utils';
import {useState} from "react";

const MoviesCard = ({movie}) => {
  const { pathname } = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const { nameRU, trailerLink, image, duration } = movie;

  const handleSaveMovie = () => setIsSaved(true);
  const handleDeleteMovie = () => setIsSaved(false);

  // временное решение для вёрстки
  const base = 'https://api.nomoreparties.co';

  const cardBtnClassNames = cn('card__button', {
    'card__button_saved': pathname === '/movies' && isSaved,
    'card__button_delete': pathname === '/saved-movies',
  });

  return (
    <li className='card'>
      <a className='card__link' href={trailerLink} target='_blank' rel='noreferrer'>
        <img
          className='card__cover'
          src={`${base}${image?.formats?.thumbnail?.url}`}
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
