import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {SearchMessage} from '../../utils/constants';

const SearchForm = ({ handleSubmitSearch, handleChangeCheckbox, showError, isLoading }) => {
  const { pathname } = useLocation();
  const {
    values,
    setValues,
    handleChange,
    isValid,
    setIsValid,
  } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    isValid ? handleSubmitSearch(values.keyWord) : showError(SearchMessage.EMPTY);
  };

  useEffect(() => {
    if (pathname === '/movies') {
      const storageKeyWord = localStorage.getItem('storageKeyWord');
      storageKeyWord && setValues({keyWord: storageKeyWord});
      setIsValid(true);
    } else {
      setValues({keyWord: ''});
    }
  }, [pathname]);

  const submitButtonClassNames = cn('search__submit-btn', {
    'search__submit-btn_disabled': isLoading,
  })

  return (
    <section className='search'>
      <div className='search__content'>
        <form
          className='search__form'
          name='form-search'
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            className='search__input'
            type='text'
            name='keyWord'
            id='keyWord'
            placeholder='Фильм'
            value={values.keyWord || ''}
            required
            minLength='1'
            maxLength='30'
            onChange={handleChange}
            disabled={isLoading}
          />
          <button
            className={submitButtonClassNames}
            type='submit'
            aria-label='Поиск'
            disabled={isLoading}
          />
        </form>
        <FilterCheckbox handleCheckbox={handleChangeCheckbox}/>
      </div>
    </section>
  )
};

export default SearchForm;
