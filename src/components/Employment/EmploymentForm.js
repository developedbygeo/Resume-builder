import useInput from '../../hooks/useInput';
import useForm from '../../hooks/useForm';
import useToggle from '../../hooks/useToggle';
import { InfoContext } from '../../store/infoContext';
import { useContext, useRef } from 'react';
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

const EmploymentForm = ({ submissionCheck, identifier = null }) => {
  const { addEmployment } = useContext(InfoContext);
  const currentToggleRef = useRef();
  const [isSubmitted, formSubmissionHandler, setIsSubmitted] = useForm(
    addEmployment,
    true
  );

  const {
    value: title,
    setValue: setTitle,
    isValueValid: isTitleValid,
    hasError: titleHasError,
    inputChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
  } = useInput(validation.validateTextNumbers);

  const {
    value: employer,
    setValue: setEmployer,
    isValueValid: isEmployerValid,
    hasError: employerHasError,
    inputChangeHandler: employerChangeHandler,
    inputBlurHandler: employerBlurHandler,
  } = useInput(validation.validateTextNumbers);

  const {
    value: from,
    setValue: setFrom,
    isValueValid: isFromDateValid,
    hasError: fromDateHasError,
    inputChangeHandler: fromDateChangeHandler,
    inputBlurHandler: fromDateBlurHandler,
  } = useInput(validation.validateStartingDate);

  const {
    value: to,
    setValue: setTo,
    isValueValid: isToDateValid,
    hasError: toDateHasError,
    inputChangeHandler: toDateChangeHandler,
    inputBlurHandler: toDateBlurHandler,
  } = useInput(validation.validateEndingDate);

  const {
    value: location,
    setValue: setLocation,
    isValueValid: isLocationValid,
    hasError: locationHasError,
    inputChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
  } = useInput(validation.validateGeneric);

  const {
    value: description,
    setValue: setDescription,
    isValueValid: isDescriptionValid,
    hasError: descriptionHasError,
    inputChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
  } = useInput(validation.validateText);

  const [endDateExists, toggleChangeHandler, isToggleActivated] = useToggle(to);

  const isFormValid =
    isEmployerValid &&
    isTitleValid &&
    isFromDateValid &&
    isToDateValid &&
    isLocationValid &&
    isDescriptionValid &&
    endDateExists;

  const dispatchData = { title, employer, description, location, from, to };

  return !isSubmitted ? (
    <StyledForm
      onSubmit={(e) =>
        formSubmissionHandler(
          e,
          isFormValid,
          dispatchData,
          submissionCheck,
          identifier
        )
      }
      autoComplete="off"
    >
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
        inputChecked={isToggleActivated}
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
