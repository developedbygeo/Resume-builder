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
    // infers the end date
    if (includesDate) {
      const endDate = dispatchData.to === '' ? 'present' : dispatchData.to;
      const updatedData = { ...dispatchData, to: endDate };
      dispatchFn(updatedData);
    } else {
      dispatchFn(dispatchData);
    }
    setIsSubmitted(true);
    // if object, calls the funcction on the data
    if (transmitParent && typeof transmitParent === 'object') {
      transmitParent.fn(transmitParent.data);
    }
    // else, submits true to parent
    if (transmitParent && typeof transmitParent === 'function') {
      transmitParent(true);
    }
  };

  return [isSubmitted, formSubmissionHandler, setIsSubmitted];
};

export default useForm;
