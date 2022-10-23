import SignWithForm from "../SignWithForm/SignWithForm";

const Register = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
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
    </SignWithForm>
  )
};

export default Register;
