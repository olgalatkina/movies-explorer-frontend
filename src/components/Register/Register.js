import { useState } from 'react';
import SignWithForm from "../SignWithForm/SignWithForm";

const Register = ({handleRegister}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleName = (evt) => {
    setName(evt.target.value);
  };

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(name, email, password);
  };

  return (
    <SignWithForm
      buttonText='Зарегистрироваться'
      formName='register'
      question='Уже зарегистрированы?'
      linkText='Войти'
      link='signin'
      onSubmit={handleSubmit}
    >
      <label htmlFor='name' className='form__label'>Имя
        <input
          className='form__input'
          type='text'
          name='name'
          id='name'
          required
          onChange={handleName}
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

export default Register;
