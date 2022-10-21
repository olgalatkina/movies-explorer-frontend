import './NavTab.css';

const NavTab = () => {
  return (
    <nav className='nav-tab'>
      <div className='nav-tab__content'>
        <ul className='nav-tab__list'>
          <li className='nav-tab-item'>
            <a href='#about-project' className='nav-tab__link'>О проекте</a>
          </li>
          <li className='nav-tab-item'>
            <a href='#techs' className='nav-tab__link'>Технологии</a>
          </li>
          <li className='nav-tab-item'>
            <a href='#' className='nav-tab__link'>Студент</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export  default NavTab;
