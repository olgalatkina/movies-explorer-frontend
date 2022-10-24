import { useState, useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './Profile.css';

const ProfileForm = ({ buttonText, formName, userName, userEmail, handleUpdateUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleName = (evt) => {
    setName(evt.target.value);
  };

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateUser({
      name,
      email,
    });
  };

  return (
    <form
      className='profile__wrapper'
      name={`form-${formName}`}
      action=''
      method=''
      onSubmit={handleSubmit}
    >
      <div className='profile__line'>
        <label htmlFor='name' className='profile__text'>Имя</label>
        <input
          className='profile__text profile__text_weight_smaller'
          type='text'
          name='name'
          id='name'
          value={userName}
          onChange={() => {}}
        />
      </div>
      <div className='profile__line'>
        <label htmlFor='email' className='profile__text'>E-mail</label>
        <input
          className='profile__text profile__text_weight_smaller'
          type='email'
          name='email'
          id='email'
          value={userEmail}
          onChange={() => {}}
        />
      </div>
      <p className='profile__error' />
      <button type='submit' className='form__submit-btn'>{buttonText}</button>
    </form>
  )
}

const Profile = ({signOut, handleUpdateUser}) => {
  const {name, email} = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditBtnClick = () => setIsEdit(true);

  return (
    <section className='profile'>
      <h1 className='profile__title'>{`Привет, ${name}!`}</h1>
      {isEdit
        ?
        <ProfileForm
          buttonText='Сохранить'
          formName='profile'
          userName={name}
          userEmail={email}
          handleUpdateUser={handleUpdateUser}
        />
        :
        <div className='profile__wrapper'>
          <div className='profile__line'>
            <p className='profile__text'>Имя</p>
            <p className='profile__text profile__text_weight_smaller'>{name}</p>
          </div>
          <div className='profile__line'>
            <p className='profile__text'>E-mail</p>
            <p className='profile__text profile__text_weight_smaller'>{email}</p>
          </div>
          <button type='button' className='profile__edit-button' onClick={handleEditBtnClick}>Редактировать</button>
          <button type='button' className='profile__exit-button' onClick={signOut}>Выйти из аккаунта</button>
        </div>
      }
    </section>
  )
};

export  default Profile;
