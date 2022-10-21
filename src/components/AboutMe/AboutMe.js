import './AboutMe.css';
import photo from '../../images/photo.jpg';
import Portfolio from "../Portfolio/Portfolio";

const AboutMe = () => {
  return (
    <section className='about-me' id='about-me'>
      <div className='about-me__content'>
        <h2 className='section-title'>Студент</h2>
        <div className='about-me__wrapper'>
          <div className='about-me__info'>
            <h3 className='about-me__name'>Виталий</h3>
            <p className='about-me__position'>Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <p className='about-me__social'>Github</p>
          </div>
          <img src={photo} alt='Виталий' className='about-me__photo' />
        </div>
        <Portfolio />
      </div>
    </section>
  )
};

export default AboutMe;
