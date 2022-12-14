import { Link } from 'react-router-dom';
import './SignWithForm.css';
import logo from '../../images/logo.svg';
import cn from 'classnames';
import Preloader from "../Preloader/Preloader";

const SignWithForm = (props) => {
  const {
    children,
    buttonText,
    formName,
    question,
    linkText,
    link,
    onSubmit,
    isValid,
    isLoading,
  } = props;

  const submitButtonClassNames = cn('form__submit-btn login__btn', {
    'form__submit-btn_disabled': !isValid || isLoading,
  })

  return (
    <section className='login'>
      <div className='login__wrapper'>
        <Link to='/' className='login__logo-link'>
          <img src={logo} alt='Логотип учебного проекта' className='logo' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
      </div>

      <form
        className='form'
        name={`form-${formName}`}
        onSubmit={onSubmit}
      >
        {children}
        {isLoading ? <Preloader /> : ''}
        <button
          type='submit'
          className={submitButtonClassNames}
          disabled={!isValid || isLoading}
        >
          {buttonText}
        </button>
      </form>

      <p className='login__question'>{question}&nbsp;
        <Link to={`/${link}`} className='login__link'>{linkText}</Link>
      </p>
    </section>
  )
};

export default SignWithForm;
