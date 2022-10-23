import SignWithForm from '../SignWithForm/SignWithForm';

const Login = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
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
    </SignWithForm>
  )
};

export default Login;
