import { Link, useLocation } from "react-router-dom";
import cn from 'classnames';
import './Navigation.css';
import useClose from '../../hooks/useClose';

const Navigation = ({isMenuOpen, setIsMenuOpen, handleOverlayClick}) => {
  const { pathname } = useLocation();
  const themeDarkOn = window.innerWidth >= 1280;
  useClose(isMenuOpen, () => {setIsMenuOpen(false)});

  const navigationClassNames = cn('navigation', {
    'navigation_opened': isMenuOpen,
  });

  const mainLinkClassNames = cn('navigation__link navigation__link_type_main', {
    'navigation__link_active': pathname === '/',
    'navigation__link_theme_dark': pathname === '/' && themeDarkOn,
  })

  const moviesLinkClassNames = cn('navigation__link', {
    'navigation__link_active': pathname === '/movies',
    'navigation__link_theme_dark': pathname === '/' && themeDarkOn,
  });

  const savedMoviesLinkClassNames = cn('navigation__link', {
    'navigation__link_active': pathname === '/saved-movies',
    'navigation__link_theme_dark': pathname === '/' && themeDarkOn,
  });

  const profileLinkClassNames = cn('navigation__profile-link', {
    'navigation__profile-link_theme_dark': pathname === '/' && themeDarkOn,
  })

  return (
    <div className={navigationClassNames} onClick={handleOverlayClick}>
      <nav className='navigation__content'>
        <div className='navigation__wrapper'>
          <Link to='/' className={mainLinkClassNames}>
            Главная
          </Link>
          <Link to='/movies' className={moviesLinkClassNames}>
            Фильмы
          </Link>
          <Link to='/saved-movies' className={savedMoviesLinkClassNames}>
            Сохранённые фильмы
          </Link>
        </div>
        <Link to='/profile' className={profileLinkClassNames}>
          Аккаунт
        </Link>
      </nav>
    </div>
  )
};

export default Navigation;
