import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className="not-found__wrapper">
        <p className="not-found__title">404</p>
        <p className="not-found__description">Страница не найдена</p>
      </div>
      <Link to="/" className="not-found__link">Назад</Link>
    </div>
  )
}

export  default NotFound;
