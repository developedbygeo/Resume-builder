import { useState, useContext, useEffect } from 'react';
import { InfoContext } from '../store/infoContext';

const useInput = (validateFn) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const {
    defaultState: { flag },
  } = useContext(InfoContext);

  const isValueValid = validateFn(value);
  const hasError = !isValueValid && isTouched;

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  };

  useEffect(() => {
    if (flag.resetFlag === true) {
      reset();
    }
  }, [flag.resetFlag]);

  return {
    value,
    isValueValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
