import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';

const Header = () => {
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerClassNames = cn('header', {
    'header_theme_dark': pathname === '/',
  });

  return (
    <header className={headerClassNames}>
      <div className='header__content'>
        <Burger loggedIn={loggedIn} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Link to='/' className={loggedIn ? '' : 'header__logo-link'}>
          <img src={logo} alt='Логотип учебного проекта' className='logo' />
        </Link>
        {loggedIn
          ? <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          :
          <nav className='header__navigation'>
            <Link to='/signup' className='header__register-link'>
              Регистрация
            </Link>
            <Link to='/signin' className='header__login-link'>
              Войти
            </Link>
          </nav>
        }
      </div>
    </header>
  )
};

export  default Header;
