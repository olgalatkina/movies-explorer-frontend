import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';

const Register = () => {
  const buttonText = 'Зарегистрироваться';
  const formName = 'register';

  return (
    <section className='login'>
      <div className='login__wrapper'>
        <Link to='/' className='login__logo-link'>
          <img src={logo} alt='Логотип учебного проекта' className='logo' />
        </Link>
        <h1 className='login__title'>Добро пожаловать!</h1>
      </div>

      <Form buttonText={buttonText} formName={formName}>
        <label htmlFor='name' className='form__label'>Имя
          <input
            className='form__input'
            type='text'
            name='name'
            id='name'
            required
          />
          <span className='form__error' id='email-error' />
        </label>

        <label htmlFor='email' className='form__label'>E-mail
          <input
            className='form__input'
            type='email'
            name='email'
            id='email'
            required
          />
          <span className='form__error' id='email-error' />
        </label>

        <label htmlFor='email' className='form__label'>Пароль
          <input
            className='form__input'
            type='password'
            name='password'
            id='password'
            required
          />
          <span className='form__error' id='password-error' />
        </label>
      </Form>

      <p className='login__question'>Уже зарегистрированы?&nbsp;
        <Link to='/signin' className='login__signup-link'>Войти</Link>
      </p>
    </section>
  )
};

export default Register;
