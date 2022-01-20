import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';
import { InfoContext } from '../../store/infoContext';
import { useContext, useRef, useState } from 'react';
import {
  errors,
  validation,
  currentYear,
  currentMonth,
  currentDay,
} from '../shared/validation';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';
import submittedFormLayout from '../shared/layout';

const EmploymentForm = () => {
  const { addEmployment } = useContext(InfoContext);
  const currentToggleRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    value: title,
    isValueValid: isTitleValid,
    hasError: titleHasError,
    inputChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
  } = useInput(validation.validateTextNumbers);

  const {
    value: employer,
    isValueValid: isEmployerValid,
    hasError: employerHasError,
    inputChangeHandler: employerChangeHandler,
    inputBlurHandler: employerBlurHandler,
  } = useInput(validation.validateTextNumbers);

  const {
    value: from,
    isValueValid: isFromDateValid,
    hasError: fromDateHasError,
    inputChangeHandler: fromDateChangeHandler,
    inputBlurHandler: fromDateBlurHandler,
  } = useInput(validation.validateStartingDate);

  const {
    value: to,
    isValueValid: isToDateValid,
    hasError: toDateHasError,
    inputChangeHandler: toDateChangeHandler,
    inputBlurHandler: toDateBlurHandler,
  } = useInput(validation.validateEndingDate);

  const {
    value: location,
    isValueValid: isLocationValid,
    hasError: locationHasError,
    inputChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
  } = useInput(validation.validateGeneric);

  const {
    value: description,
    isValueValid: isDescriptionValid,
    hasError: descriptionHasError,
    inputChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
  } = useInput(validation.validateText);

  const [endDateExists, toggleChangeHandler] = useToggle(to);

  const isFormValid =
    isEmployerValid &&
    isTitleValid &&
    isFromDateValid &&
    isToDateValid &&
    isLocationValid &&
    isDescriptionValid &&
    endDateExists;

  const formSubmitHandler = (e) => {
    const endDate = to === '' ? 'present' : to;
    e.preventDefault();
    if (!isFormValid) return;

    addEmployment({
      title,
      employer,
      description,
      location,
      title,
      from,
      to: endDate,
    });
    setIsSubmitted(true);
  };

  return !isSubmitted ? (
    <StyledForm onSubmit={formSubmitHandler} autoComplete="off">
      <FormInput
        className={titleHasError && 'invalid'}
        errorMessage={errors.errorGeneric('job title')}
        htmlFor="title"
        inputId="title"
        label="Job Title"
        inputChange={titleChangeHandler}
        inputBlur={titleBlurHandler}
        inputValue={title}
        inputPlaceholder="eg. Software Engineer"
        inputType="text"
        required
      />
      <FormInput
        className={employerHasError && 'invalid'}
        errorMessage={errors.errorGeneric('employer')}
        htmlFor="employer"
        inputId="employer"
        label="Employer"
        inputChange={employerChangeHandler}
        inputBlur={employerBlurHandler}
        inputValue={employer}
        inputPlaceholder="eg. Google"
        inputType="text"
        required
      />
      <FormInput
        className={fromDateHasError && 'invalid'}
        errorMessage={errors.errorDateFrom}
        htmlFor="startdate"
        inputId="startdate"
        label="From"
        inputChange={fromDateChangeHandler}
        inputBlur={fromDateBlurHandler}
        inputValue={from}
        inputType="date"
        minConstraint={`${currentYear - 60}-01-01`}
        maxConstraint={`${currentYear}-${currentMonth}-${currentDay}`}
        required
      />
      <FormInput
        className={toDateHasError && 'invalid'}
        errorMessage={errors.errorDateTo}
        htmlFor="enddate"
        inputId="enddate"
        label="To"
        inputChange={toDateChangeHandler}
        inputBlur={toDateBlurHandler}
        inputValue={to}
        inputType="date"
        minConstraint={`${currentYear - 60}-01-01`}
        maxConstraint={`${currentYear + 5}-${currentMonth}-${currentDay}`}
      />
      <FormInput
        className={locationHasError && 'invalid'}
        errorMessage={errors.errorGeneric('location')}
        htmlFor="joblocation"
        inputId="joblocation"
        label="Location"
        inputPlaceholder="eg. Edinburgh"
        inputChange={locationChangeHandler}
        inputBlur={locationBlurHandler}
        inputValue={location}
        inputType="text"
        required
      />
      <FormInput
        className={descriptionHasError && 'invalid'}
        errorMessage={errors.errorTextarea('job description')}
        htmlFor="jobdescription"
        inputId="jobdescription"
        label="Description"
        inputPlaceholder="Briefly describe your tasks and accomplishments"
        inputChange={descriptionChangeHandler}
        inputBlur={descriptionBlurHandler}
        inputValue={description}
        inputType="text"
        inputAs="textarea"
        required
      />
      <FormInput
        isToggle={true}
        inputChange={toggleChangeHandler}
        className={!endDateExists && 'invalid'}
        errorMessage={errors.timeFrameTip('employment', 'working')}
        ref={currentToggleRef}
        toggleTitle="I am currently working here"
        htmlFor="stillHere"
        inputId="stillHere"
        label="Currently working here"
      />
      <FormButton disabled={!isFormValid} />
    </StyledForm>
  ) : (
    submittedFormLayout('Employment details', () => setIsSubmitted(false))
  );
};

export default EmploymentForm;
