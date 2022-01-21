import { useState } from 'react';

const useForm = (dispatchFn, includesDate = false) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSubmissionHandler = (
    e,
    isFormValid,
    dispatchData,
    transmitParent = null
  ) => {
    e.preventDefault();
    if (!isFormValid) return;
    if (includesDate) {
      const endDate = dispatchData.to === '' ? 'present' : dispatchData.to;
      const updatedData = { ...dispatchData, to: endDate };
      dispatchFn(updatedData);
    } else {
      dispatchFn(dispatchData);
    }
    setIsSubmitted(true);
    if (transmitParent) {
      transmitParent.fn(transmitParent.data);
    }
  };

  return [isSubmitted, formSubmissionHandler, setIsSubmitted];
};

export default useForm;
