import { useState } from 'react';

const useForm = (dispatchFn, includesDate = false) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSubmissionHandler = (
    e,
    isFormValid,
    dispatchData,
    transmitParent = null,
    identifier = null
  ) => {
    e.preventDefault();
    if (!isFormValid) return;
    // infers the end date
    if (includesDate) {
      const endDate = dispatchData.to === '' ? 'present' : dispatchData.to;
      const updatedData = { ...dispatchData, to: endDate };
      if (identifier) {
        dispatchFn(updatedData, identifier);
      } else {
        dispatchFn(updatedData);
      }
    } else {
      dispatchFn(dispatchData);
    }
    setIsSubmitted(true);
    // if object, calls the function on the data
    if (transmitParent && typeof transmitParent === 'object') {
      transmitParent.fn(transmitParent.data);
    }
    // else, submits true to parent
    if (transmitParent && typeof transmitParent === 'function') {
      transmitParent(identifier);
    }
  };

  return [isSubmitted, formSubmissionHandler, setIsSubmitted];
};

export default useForm;
