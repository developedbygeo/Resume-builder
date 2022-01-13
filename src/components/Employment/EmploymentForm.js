import useInput from '../../hooks/useInput';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';
import Toggle from '../shared/Toggle/Toggle';

const validateStartingDate = (val) => val;
const validateEndingDate = (val) => val;
const validateText = (val) => val.trim().length > 2;

const EmploymentForm = () => {
  const {
    value: jobValue,
    isValueValid: isJobValid,
    hasError: jobHasError,
    inputChangeHandler: jobChangeHandler,
    inputBlurHandler: jobBlurHandler,
  } = useInput(validateText);

  const {
    value: employerValue,
    isValueValid: isEmployerValid,
    hasError: employerHasError,
    inputChangeHandler: employerChangeHandler,
    inputBlurHandler: employerBlurHandler,
  } = useInput(validateText);

  const {
    value: startingDateValue,
    isValueValid: isStartingDateValid,
    hasError: startingDateHasError,
    inputChangeHandler: startingDateChangeHandler,
    inputBlurHandler: startingDateBlurHandler,
  } = useInput(validateStartingDate);

  const {
    value: endDateValue,
    isValueValid: isEndDateValid,
    hasError: endDateHasError,
    inputChangeHandler: endDateChangeHandler,
    inputBlurHandler: endDateBlurHandler,
  } = useInput(validateEndingDate);

  const {
    value: jobLocationValue,
    isValueValid: isJobLocationValid,
    hasError: jobLocationHasError,
    inputChangeHandler: jobLocationChangeHandler,
    inputBlurHandler: jobLocationBlurHandler,
  } = useInput(validateText);

  const {
    value: jobDescriptionValue,
    isValueValid: isJobDescriptionValid,
    hasError: jobDescriptionHasError,
    inputChangeHandler: jobDescriptionChangeHandler,
    inputBlurHandler: jobDescriptionBlurHandler,
  } = useInput(validateText);

  return (
    <StyledForm>
      <FormInput
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
        htmlFor="startdate"
        inputId="startdate"
        label="From"
        inputChange={startingDateChangeHandler}
        inputBlur={startingDateBlurHandler}
        inputValue={startingDateValue}
        inputType="date"
        required
      />
      <FormInput
        htmlFor="enddate"
        inputId="enddate"
        label="To"
        inputChange={endDateChangeHandler}
        inputBlur={endDateBlurHandler}
        inputValue={endDateValue}
        inputType="date"
        required
      />
      <FormInput
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
        htmlFor="stillHere"
        inputId="stillHere"
        label="Currently working here"
      />
      <FormButton />
    </StyledForm>
  );
};

export default EmploymentForm;
