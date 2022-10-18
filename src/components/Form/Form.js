import './Form.css';

const Form = (props) => {
  const {children, buttonText} = props;

  return (
    <form
      className='form'
      action=''
      method=''
    >
      {children}
      <button type='submit' className='form__submit-btn'>{buttonText}</button>
    </form>
  )
};

export default Form;
