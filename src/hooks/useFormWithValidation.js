import { useState, useCallback} from 'react';
import { CUSTOM_VALIDATION } from '../utils/constants';

const useFormWithValidation = ({initialValues} = {}) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    switch (name) {
      case 'username':
        target.validity.patternMismatch
          ? target.setCustomValidity(CUSTOM_VALIDATION.username.message)
          : target.setCustomValidity('')
        break;
      case 'email':
        target.validity.patternMismatch
          ? target.setCustomValidity(CUSTOM_VALIDATION.email.message)
          : target.setCustomValidity('')
        break;
      default: target.setCustomValidity('')
    }

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, handleChange, errors, isValid, setIsValid, resetForm };
}

export default useFormWithValidation;
