import {useState} from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({ handleSubmitSearch }) => {
  const [keyWord, setKeyWord] = useState('');
  const [isShort, setIsShot] = useState(false);

  const handleInputKeyWord = (evt) => setKeyWord(evt.target.value);

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleSubmitSearch(keyWord);
  };

  return (
    <section className='search'>
      <div className='search__content'>
        <form
          className='search__form'
          name='form-search'
          action=''
          method=''
          onSubmit={onSubmit}
        >
          <input
            value={keyWord}
            className='search__input'
            type='text'
            name='search'
            placeholder='Фильм'
            required
            onChange={handleInputKeyWord}
          />
          <button className='search__submit-btn' type='submit' aria-label='Поиск' />
        </form>
        <FilterCheckbox isShort={isShort} setIsShot={setIsShot}/>
      </div>
    </section>
  )
};

export default SearchForm;
