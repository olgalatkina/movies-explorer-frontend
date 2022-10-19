import { Link } from 'react-router-dom';
import './SignWithForm.css';
import logo from '../../images/logo.svg';

const SignWithForm = (props) => {
  const {children, buttonText, formName, question, linkText, link, onSubmit} = props;

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
        action=''
        method=''
        onSubmit={onSubmit}
      >
        {children}
        <button type='submit' className='form__submit-btn'>{buttonText}</button>
      </form>

      <p className='login__question'>{question}&nbsp;
        <Link to={`/${link}`} className='login__link'>{linkText}</Link>
      </p>
    </section>
  )
};

export default SignWithForm;
