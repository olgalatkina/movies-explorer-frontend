import './Form.css';

const Form = (props) => {
  const {children, buttonText, formName} = props;

  return (
    <form
      className='form'
      name={`form-${formName}`}
      action=''
      method=''
    >
      {children}
      <button type='submit' className='form__submit-btn'>{buttonText}</button>
    </form>
  )
};

export default Form;
