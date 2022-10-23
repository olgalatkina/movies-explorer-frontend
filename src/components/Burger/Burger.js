import cn from 'classnames';
import './Burger.css';
import {useLocation} from 'react-router-dom';

const Burger = ({loggedIn, isMenuOpen, setIsMenuOpen}) => {
  const { pathname } = useLocation();

  const burgerClassNames = cn('burger', {
    'burger_invisible': !loggedIn,
    'burger_close': isMenuOpen,
    'burger_theme_dark': !isMenuOpen && pathname === '/',
  });

  const handleBurgerClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <button
      className={burgerClassNames}
      type='button'
      onClick={handleBurgerClick}
    >
      <span className="burger__line" />
    </button>
  )
};

export default Burger;
