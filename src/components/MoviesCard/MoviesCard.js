import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { formatDuration } from '../../utils/utils';

const MoviesCard = ({movie}) => {
  const location = useLocation().pathname; // '/movies'
  const { nameRU, trailerLink, image, duration } = movie;
  const base = 'https://api.nomoreparties.co';
  const handleCardBtnClick = () => {};

  // const cardBtnClass = cn('card__button', {
  //
  // });

  return (
    <li className='card'>
      <a className='card__link' href={trailerLink} target='_blank'>
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
            className='card__button'
            type='button'
            aria-label={'save movie'}
            onClick={handleCardBtnClick}
          />
        </div>
        <p className='card__duration'>{formatDuration(duration)}</p>
      </div>
    </li>
  )
}

export default MoviesCard;
