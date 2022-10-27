import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({ handleSubmitSearch, handleChangeCheckbox, setErrorMessage }) => {
  const { pathname } = useLocation();
  const {
    values,
    setValues,
    handleChange,
    isValid,
    setIsValid,
  } = useFormWithValidation();

  useEffect(() => {
    if (pathname === '/movies') {
      const storageKeyWord = localStorage.getItem('storageKeyWord');
      storageKeyWord && setValues({keyWord: storageKeyWord});
      setIsValid(true);
    } else {
      setValues({keyWord: ''});
    }
  }, [pathname]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // if (isValid) handleSubmitSearch(values.keyWord);
    isValid ? handleSubmitSearch(values.keyWord) : setErrorMessage();
  };

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
          />
          <button className='search__submit-btn' type='submit' aria-label='Поиск' />
        </form>
        <FilterCheckbox handleCheckbox={handleChangeCheckbox}/>
      </div>
    </section>
  )
};

export default SearchForm;
