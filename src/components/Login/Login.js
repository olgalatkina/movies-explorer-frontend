import useFormWithValidation from '../../hooks/useFormWithValidation';
import { VALIDATION } from '../../utils/constants';
import SignWithForm from '../SignWithForm/SignWithForm';

const Login = ({ handleLogin, error }) => {
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(
      values.email,
      values.password,
    );
  };

  return (
    <SignWithForm
      buttonText='Войти'
      formName='login'
      question='Ещё не зарегистрированы?'
      linkText='Регистрация'
      link='signup'
      error={error}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor='email' className='form__label'>E-mail
        <input
          className='form__input'
          type='email'
          name='email'
          id='email'
          minLength='5'
          maxLength='30'
          required
          value={values.email || ''}
          pattern={VALIDATION.email.pattern}
          onChange={handleChange}
        />
        <span className='form__error' id='email-error'>{errors.email}</span>
      </label>

      <label htmlFor='password' className='form__label'>Пароль
        <input
          className='form__input'
          type='password'
          name='password'
          id='password'
          maxLength='30'
          required
          value={values.password || ''}
          onChange={handleChange}
        />
        <span className='form__error' id='password-error'>{errors.password}</span>
      </label>
    </SignWithForm>
  )
};

export default Login;
