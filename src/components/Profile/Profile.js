import { useState, useContext, useRef, useEffect } from 'react';
import MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { VALIDATION, AppMessage } from '../../utils/constants';
import './Profile.css';
import Preloader from '../Preloader/Preloader';

const Profile = ({ signOut, setTooltipSettings, setInfoTooltipPopupOpen }) => {
  const userContext = useContext(CurrentUserContext); // {currentUser, setCurrentUser, savedMovies, setSavedMovies}
  const [userData, setUserData] = useState(userContext.currentUser);
  const initialValues = {
    username: userData.name,
    email: userData.email,
  };
  const [currentError, setCurrentError]= useState('');
  const nameInputRef = useRef(false);
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation({ initialValues });
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleEdit(evt) {
    evt.preventDefault();
    await setIsEdit(true);
    nameInputRef.current.focus();
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setCurrentError('');
    setIsLoading(true);
    setUserData({
      name: values.username,
      email: values.email,
    });

    MainApi.changeUserInfo({
      name: values.username,
      email: values.email,
    })
      .then((data) => {
        setCurrentError('');
        setIsEdit(false);
        setInfoTooltipPopupOpen(true);
        setTooltipSettings({
          message: AppMessage.UPDATE_SUCCESS,
          isSuccess: true,
        })
        resetForm({
          username: data.name,
          email: data.email,
        })
      })
      .catch(async (err) => {
        const { message } = await err.json();
        setTooltipSettings({
          message: AppMessage.BAD_REQUEST,
          isSuccess: false,
        })
        setInfoTooltipPopupOpen(true);
        setCurrentError(message);
      })
      .finally(() => setIsLoading(false))
  }

  const isButtonActive = isValid && !isLoading;

  return (
    <section className='profile'>
      <h1 className='profile__title'>{`Привет, ${userData.name}!`}</h1>
      <form
        className='profile__wrapper'
        name={`form-profile`}
        onSubmit={handleSubmit}
      >
        <div className='profile__line'>
          <label htmlFor='name' className='profile__text'>Имя</label>
          <input
            className='profile__text profile__text_weight_smaller'
            type='text'
            name='username'
            id='name'
            ref={nameInputRef}
            minLength='2'
            maxLength='30'
            pattern={VALIDATION.username.pattern}
            value={values.username || ''}
            onChange={handleChange}
            disabled={isLoading || !isEdit}
          />
        </div>
        <div className='profile__line'>
          <label htmlFor='email' className='profile__text'>E-mail</label>
          <input
            className='profile__text profile__text_weight_smaller'
            type='email'
            name='email'
            id='email'
            minLength='5'
            maxLength='50'
            pattern={VALIDATION.email.pattern}
            value={values.email || ''}
            onChange={handleChange}
            disabled={isLoading || !isEdit}
          />
        </div>
        {isLoading ? <Preloader /> : ''}
        <p className='profile__error'>{errors.username || errors.email}</p>
        {isEdit
          ?
          <button type='submit' className='profile__submit-btn' disabled={!isButtonActive}>Сохранить</button>
          :
          <button type='button' className='profile__edit-button' onClick={handleEdit}>Редактировать</button>
        }
        {!isEdit
          ?
          <button type='button' className='profile__exit-button' onClick={signOut}>Выйти из аккаунта</button>
          :
          ''
        }
      </form>
    </section>
  )
}

export  default Profile;
