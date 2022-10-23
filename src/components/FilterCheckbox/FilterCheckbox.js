import './FilterCheckbox.css';

const FilterCheckbox = ({ isShort, setIsShot }) => {
  return (
    <div className='checkbox'>
      <label className='checkbox__content'>
        <input
          className='checkbox__input'
          onClick={() => setIsShot(!isShort)}
          type='checkbox'
          checked={isShort}
        />
        <span className='checkbox__slider' />
        <span className='checkbox__name'>Короткометражки</span>
      </label>
    </div>
  )
};

export  default  FilterCheckbox;
