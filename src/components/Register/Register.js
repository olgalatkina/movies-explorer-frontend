import useFormWithValidation from '../../hooks/useFormWithValidation';
import { VALIDATION } from '../../utils/constants';
import SignWithForm from "../SignWithForm/SignWithForm";
import Preloader from '../Preloader/Preloader';

const Register = ({ handleRegister, error, isLoading }) => {
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(
      values.username,
      values.email,
      values.password,
    );
  };

  return (
    isLoading
    ?
    <Preloader />
    :
    <SignWithForm
      buttonText='Зарегистрироваться'
      formName='register'
      question='Уже зарегистрированы?'
      linkText='Войти'
      link='signin'
      error={error}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor='name' className='form__label'>Имя
        <input
          className='form__input'
          type='text'
          name='username'
          id='name'
          minLength='2'
          maxLength='20'
          required
          value={values.username || ''}
          pattern={VALIDATION.username.pattern}
          onChange={handleChange}
        />
        <span className='form__error' id='email-error'>{errors.username}</span>
      </label>

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

      <label htmlFor='email' className='form__label'>Пароль
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

export default Register;
