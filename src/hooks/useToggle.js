import { useState, useEffect } from 'react';

const useToggle = (currentEndDate) => {
  const [endDateExists, setEndDateExists] = useState(false);
  const [isToggleActivated, setIsToggleActivated] = useState(false);

  useEffect(() => {
    if (currentEndDate !== '' && !isToggleActivated) {
      setEndDateExists(true);
    } else if (currentEndDate === '' && isToggleActivated) {
      setEndDateExists(true);
    } else {
      setEndDateExists(false);
    }
  }, [currentEndDate, isToggleActivated]);

  const toggleChangeHandler = (e) => {
    setIsToggleActivated(
      e.target.checked === 'false' || e.target.checked === false ? false : true
    );
  };

  return [endDateExists, toggleChangeHandler, isToggleActivated];
};

export default useToggle;
