import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';

const FilterCheckbox = ({ handleCheckbox }) => {
  const { pathname } = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    handleCheckbox(!isChecked);
  };

  useEffect(() => {
    if (pathname === '/movies') {
      const storageIsShort = JSON.parse(localStorage.getItem('storageIsShort'));
      storageIsShort && setIsChecked(storageIsShort);
    } else {
      setIsChecked(false);
    }
  }, []);

  return (
    <div className='checkbox'>
      <label className='checkbox__content'>
        <input
          className='checkbox__input'
          type='checkbox'
          checked={isChecked}
          onChange={handleChange}
        />
        <span className='checkbox__slider' />
        <span className='checkbox__name'>Короткометражки</span>
      </label>
    </div>
  )
};

export  default  FilterCheckbox;
