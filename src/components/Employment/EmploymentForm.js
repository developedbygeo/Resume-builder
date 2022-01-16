import useInput from '../../hooks/useInput';
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

const EmploymentForm = () => {
  const {
    value: jobValue,
    isValueValid: isJobValid,
    hasError: jobHasError,
    inputChangeHandler: jobChangeHandler,
    inputBlurHandler: jobBlurHandler,
  } = useInput(validation.validateTextNumbers);

  const {
    value: employerValue,
    isValueValid: isEmployerValid,
    hasError: employerHasError,
    inputChangeHandler: employerChangeHandler,
    inputBlurHandler: employerBlurHandler,
  } = useInput(validation.validateTextNumbers);

  const {
    value: startingDateValue,
    isValueValid: isStartingDateValid,
    hasError: startingDateHasError,
    inputChangeHandler: startingDateChangeHandler,
    inputBlurHandler: startingDateBlurHandler,
  } = useInput(validation.validateStartingDate);

  const {
    value: endDateValue,
    isValueValid: isEndDateValid,
    hasError: endDateHasError,
    inputChangeHandler: endDateChangeHandler,
    inputBlurHandler: endDateBlurHandler,
  } = useInput(validation.validateEndingDate);

  const {
    value: jobLocationValue,
    isValueValid: isJobLocationValid,
    hasError: jobLocationHasError,
    inputChangeHandler: jobLocationChangeHandler,
    inputBlurHandler: jobLocationBlurHandler,
  } = useInput(validation.validateGeneric);

  const {
    value: jobDescriptionValue,
    isValueValid: isJobDescriptionValid,
    hasError: jobDescriptionHasError,
    inputChangeHandler: jobDescriptionChangeHandler,
    inputBlurHandler: jobDescriptionBlurHandler,
  } = useInput(validation.validateText);

  const isFormValid =
    isEmployerValid &&
    isJobValid &&
    isStartingDateValid &&
    isEndDateValid &&
    isJobLocationValid &&
    isJobDescriptionValid;

  const formSubmitHandler = (e) => {
    if (isFormValid) {
    }
  };

  return (
    <StyledForm autoComplete="off">
      <FormInput
        className={jobHasError && 'invalid'}
        errorMessage={errors.errorGeneric('job title')}
        htmlFor="title"
        inputId="title"
        label="Job Title"
        inputChange={jobChangeHandler}
        inputBlur={jobBlurHandler}
        inputValue={jobValue}
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
        inputValue={employerValue}
        inputPlaceholder="eg. Google"
        inputType="text"
        required
      />
      <FormInput
        className={startingDateHasError && 'invalid'}
        errorMessage={errors.errorDateFrom}
        htmlFor="startdate"
        inputId="startdate"
        label="From"
        inputChange={startingDateChangeHandler}
        inputBlur={startingDateBlurHandler}
        inputValue={startingDateValue}
        inputType="date"
        minConstraint={`${currentYear - 60}-01-01`}
        maxConstraint={`${currentYear}-${currentMonth}-${currentDay}`}
        required
      />
      <FormInput
        className={endDateHasError && 'invalid'}
        errorMessage={errors.errorDateTo}
        htmlFor="enddate"
        inputId="enddate"
        label="To"
        inputChange={endDateChangeHandler}
        inputBlur={endDateBlurHandler}
        inputValue={endDateValue}
        inputType="date"
        minConstraint={`${currentYear - 60}-01-01`}
        maxConstraint={`${currentYear + 5}-${currentMonth}-${currentDay}`}
      />
      <FormInput
        className={jobLocationHasError && 'invalid'}
        errorMessage={errors.errorGeneric('location')}
        htmlFor="joblocation"
        inputId="joblocation"
        label="Location"
        inputPlaceholder="eg. Edinburgh"
        inputChange={jobLocationChangeHandler}
        inputBlur={jobLocationBlurHandler}
        inputValue={jobLocationValue}
        inputType="text"
        required
      />
      <FormInput
        className={jobDescriptionHasError && 'invalid'}
        errorMessage={errors.errorTextarea('job description')}
        htmlFor="jobdescription"
        inputId="jobdescription"
        label="Description"
        inputPlaceholder="Briefly describe your tasks and accomplishments"
        inputChange={jobDescriptionChangeHandler}
        inputBlur={jobDescriptionBlurHandler}
        inputValue={jobDescriptionValue}
        inputType="text"
        inputAs="textarea"
        required
      />
      <FormInput
        isToggle={true}
        toggleTitle="I am currently working here"
        htmlFor="stillHere"
        inputId="stillHere"
        label="Currently working here"
      />
      <FormButton disabled={!isFormValid} />
    </StyledForm>
  );
};

export default EmploymentForm;
