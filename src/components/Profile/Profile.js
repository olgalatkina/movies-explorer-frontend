import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const ProfileForm = ({ buttonText, formName, setIsEdit, userName, email }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // временное решение для проверки вёрстки
    setIsEdit(false);
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
        />
      </div>
      <div className='profile__line'>
        <label htmlFor='email' className='profile__text'>E-mail</label>
        <input
          className='profile__text profile__text_weight_smaller'
          type='email'
          name='email'
          id='email'
          value={email}
        />
      </div>
      <p className='profile__error' />
      <button type='submit' className='form__submit-btn'>{buttonText}</button>
    </form>
  )
}

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  // позже возьмём из me
  const userName = 'trolya';
  const email = 'pink.elephant@yandex.ru';

  const handleEditBtnClick = () => setIsEdit(true);

  return (
    <section className='profile'>
      <h1 className='profile__title'>{`Привет, ${userName}!`}</h1>
      {isEdit
        ?
        <ProfileForm
          buttonText='Сохранить'
          formName='profile'
          setIsEdit={setIsEdit}
          userName={userName}
          email={email}
        />
        :
        <div className='profile__wrapper'>
          <div className='profile__line'>
            <p className='profile__text'>Имя</p>
            <p className='profile__text profile__text_weight_smaller'>{userName}</p>
          </div>
          <div className='profile__line'>
            <p className='profile__text'>E-mail</p>
            <p className='profile__text profile__text_weight_smaller'>{email}</p>
          </div>
          <button type='button' className='profile__edit-button' onClick={handleEditBtnClick}>Редактировать</button>
          <Link to={`/`} className='profile__link'>Выйти из аккаунта</Link>
        </div>
      }
    </section>
  )
};

export  default Profile;
