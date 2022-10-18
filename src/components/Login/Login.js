import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';

const Login = () => {
  const buttonText = 'Войти';

  return (
    <section className='login'>
      <div className='login__wrapper'>
        <Link to='/' className='login__logo-link'>
          <img src={logo} alt='Логотип учебного проекта' className='logo' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
      </div>

      <Form buttonText={buttonText}>
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

      <p className='login__question'>Ещё не зарегистрированы?&nbsp;
        <Link to='/signup' className='login__signup-link'>Регистрация</Link>
      </p>
    </section>
  )
};

export default Login;
