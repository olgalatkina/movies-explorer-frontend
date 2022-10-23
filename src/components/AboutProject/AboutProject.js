import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='about-project' id='about-project'>
      <div className='about-project__content'>
        <h2 className='section-title'>О проекте</h2>
        <ul className='about-project__description'>
          <li>
            <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__text'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </li>
          <li>
            <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className='about-project__table'>
          <p className='about-project__back about-project__table-text'>1 неделя</p>
          <p className='about-project__front about-project__table-text'>4 недели</p>
          <p className='about-project__back about-project__table-text about-project__caption'>Back-end</p>
          <p className='about-project__front about-project__table-text about-project__caption'>Front-end</p>
        </div>
      </div>
    </section>
  )
};

export  default AboutProject;
