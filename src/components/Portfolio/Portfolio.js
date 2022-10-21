import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a href='https://olgalatkina-how-to-learn.netlify.app/' className='portfolio__category' target='_blank'>
            Статичный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a href='https://olgalatkina-russian-travel.netlify.app/' className='portfolio__category' target='_blank'>
            Адаптивный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a href='https://olgalatkina-mishka.netlify.app/' className='portfolio__category' target='_blank'>
            Многостраничный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a href='https://olgalatkina-bigtrip.netlify.app/' className='portfolio__category' target='_blank'>
            Приложение на vanila js
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a href='https://mesto.olgalatkina.nomoredomains.sbs/' className='portfolio__category' target='_blank'>
            Одностраничное приложение
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a href='https://olgalatkina-six-cities.netlify.app/' className='portfolio__category' target='_blank'>
            Одностраничное приложение TS + RTK
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
      </ul>
    </div>
  )
};

export  default Portfolio;
