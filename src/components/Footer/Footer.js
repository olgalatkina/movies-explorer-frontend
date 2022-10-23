import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__wrapper'>
          <a href='https://practicum.yandex.ru/' className='footer__link' target='_blank'>Яндекс.Практикум</a>
          <a href='https://github.com/olgalatkina' className='footer__link' target='_blank'>Github</a>
          <p className='footer__copyright'>olgalatkina&copy;2020</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
