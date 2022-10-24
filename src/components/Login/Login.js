import { useState } from 'react';
import SignWithForm from '../SignWithForm/SignWithForm';

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(email, password);
  };

  return (
    <SignWithForm
      buttonText='Войти'
      formName='login'
      question='Ещё не зарегистрированы?'
      linkText='Регистрация'
      link='signup'
      onSubmit={handleSubmit}
    >
      <label htmlFor='email' className='form__label'>E-mail
        <input
          className='form__input'
          type='email'
          name='email'
          id='email'
          required
          onChange={handleEmail}
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
          onChange={handlePassword}
        />
        <span className='form__error' id='password-error' />
      </label>
    </SignWithForm>
  )
};

export default Login;
