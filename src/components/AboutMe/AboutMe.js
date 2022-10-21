import './AboutMe.css';
import photo from '../../images/sketch.jpg';
import Portfolio from "../Portfolio/Portfolio";

const AboutMe = () => {
  return (
    <section className='about-me' id='about-me'>
      <div className='about-me__content'>
        <h2 className='section-title'>Студент</h2>
        <div className='about-me__wrapper'>
          <div className='about-me__info'>
            <h3 className='about-me__name'>Ольга</h3>
            <p className='about-me__position'>Фронтенд-разработчик</p>
            <p className="about-me__text">
              Я&nbsp;родилась и&nbsp;в&nbsp;данный момент живу в&nbsp;Новосибирске, закончила худграф НГПУ. Люблю слушать музыку, а&nbsp;ещё увлекаюсь европейской каллиграфией. Работаю дизайнером, с&nbsp;2018 года в&nbsp;сваязи с&nbsp;переездом в&nbsp;Нижний Новгород freelance. Сначала вебразработка была необходимым повышением квалификации как дизайнера, но&nbsp;кодить оказалось интереснее ❤. HTML&nbsp;Academy, Hexlet, RSSchool и&nbsp;теперь Я.Практикум. Кажется, мне реально нравится учиться:) Приятно, что всё это помогает в&nbsp;работе.
            </p>
            <a href='https://github.com/olgalatkina' className='about-me__social' target='_blank'>Github</a>
          </div>
          <img src={photo} alt='Ольга' className='about-me__photo' />
        </div>
        <Portfolio />
      </div>
    </section>
  )
};

export default AboutMe;
