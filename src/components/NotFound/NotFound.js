import { useNavigate } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='not-found'>
      <div className='not-found__wrapper'>
        <p className='not-found__title'>404</p>
        <p className='not-found__description'>Страница не найдена</p>
      </div>
      <button type='button' className='not-found__link' onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}

export  default NotFound;
