import { useState, useContext, useEffect } from 'react';
import cn from 'classnames';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { VALIDATION, AppMessage } from '../../utils/constants';
import './Profile.css';

const Profile = ({ signOut, formName, handleUpdateUser }) => {
  const { name, email } = useContext(CurrentUserContext).currentUser;
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);

  const [disabledButton, setDisabledButton] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isDataLoad, setIsDataLoad] = useState(false);

  const handleName = (evt) => {
    setUserName(evt.target.value);
  };

  const handleEmail = (evt) => {
    setUserEmail(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateUser({
      name: userName,
      email: userEmail,
    });
  };

  const handleEditBtnClick = () => setIsEdit(true);

  useEffect(() => {
    if (userName !== name || userEmail !== email) {
      setDisabledButton(false);
    }
    else {
      setDisabledButton(true);
    }
  }, [handleName, handleEmail, userName, userEmail, name, email]);

  const submitButtonClassNames = cn('form__submit-btn', {
    'form__submit-btn_disabled': disabledButton,
  })

  return (
    <section className='profile'>
      <h1 className='profile__title'>{`Привет, ${name}!`}</h1>
      <form
        className='profile__wrapper'
        name={`form-${formName}`}
        onSubmit={handleSubmit}
      >
        <div className='profile__line'>
          <label htmlFor='name' className='profile__text'>Имя</label>
          <input
            className='profile__text profile__text_weight_smaller'
            type='text'
            name='name'
            id='name'
            minLength='2'
            maxLength='30'
            defaultValue={name}
            onChange={handleName}
            disabled={isDataLoad || !isEdit}
          />
        </div>
        <div className='profile__line'>
          <label htmlFor='email' className='profile__text'>E-mail</label>
          <input
            className='profile__text profile__text_weight_smaller'
            type='email'
            name='email'
            id='email'
            defaultValue={email}
            onChange={handleEmail}
            disabled={isDataLoad || !isEdit}
          />
        </div>
        <p className='profile__error' />
        {isEdit
          ?
          <button type='submit' className={submitButtonClassNames} disabled={disabledButton}>Сохранить</button>
          :
          <button type='button' className='profile__edit-button' onClick={handleEditBtnClick}>Редактировать</button>
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

// const Profile = ({signOut, handleUpdateUser, isLoading}) => {
//   const { name, email } = useContext(CurrentUserContext).currentUser;
//   const [isEdit, setIsEdit] = useState(false);
//
//   const handleEditBtnClick = () => setIsEdit(true);
//
//   return (
//     <section className='profile'>
//       <h1 className='profile__title'>{`Привет, ${name}!`}</h1>
//       {isEdit
//         ?
//         <ProfileForm
//           formName='profile'
//           handleUpdateUser={handleUpdateUser}
//         />
//         :
//         <div className='profile__wrapper'>
//           <div className='profile__line'>
//             <p className='profile__text'>Имя</p>
//             <p className='profile__text profile__text_weight_smaller'>{name}</p>
//           </div>
//           <div className='profile__line'>
//             <p className='profile__text'>E-mail</p>
//             <p className='profile__text profile__text_weight_smaller'>{email}</p>
//           </div>
//           <button type='button' className='profile__edit-button' onClick={handleEditBtnClick}>Редактировать</button>
//           <button type='button' className='profile__exit-button' onClick={signOut}>Выйти из аккаунта</button>
//         </div>
//       }
//     </section>
//   )
// };

export  default Profile;
