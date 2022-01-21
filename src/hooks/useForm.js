import { useState } from 'react';

const useForm = (dispatchFn) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSubmissionHandler = (
    e,
    isFormValid,
    dispatchData,
    transmitParent = null
  ) => {
    e.preventDefault();
    if (!isFormValid) return;

    dispatchFn(dispatchData);
    setIsSubmitted(true);
    if (transmitParent) {
      transmitParent.fn(transmitParent.data);
    }
  };

  return [isSubmitted, formSubmissionHandler, setIsSubmitted];
};

export default useForm;
