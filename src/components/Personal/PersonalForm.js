import useInput from '../../hooks/useInput';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';

const validateName = (val) => val.trim().length > 2;

const PersonalForm = () => {
  const {
    value: nameValue,
    isValueValid: isFNameValid,
    hasError: fNameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(validateName);

  const {
    value: lastNameValue,
    isValueValid: isLastNameValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput(validateName);

  const {
    value: statementValue,
    isValueValid: isStatementValid,
    hasError: statementHameHasError,
    inputChangeHandler: statementChangeHandler,
    inputBlurHandler: statementBlurHandler,
  } = useInput(validateName);

  const isFormValid = isFNameValid;

  return (
    <StyledForm>
      <FormInput
        htmlFor="firstName"
        inputId="firstName"
        label="First Name"
        inputChange={nameChangeHandler}
        inputBlur={nameBlurHandler}
        inputValue={nameValue}
        inputPlaceholder="Provide your first & middle name (if any)"
        inputType="text"
        required
      />
      <FormInput
        htmlFor="lastName"
        inputId="lastName"
        label="Last Name"
        inputChange={lastNameChangeHandler}
        inputBlur={lastNameBlurHandler}
        inputValue={lastNameValue}
        inputPlaceholder="Your full last name"
        inputType="text"
        required
      />
      <FormInput
        htmlFor="personalStatement"
        inputId="personalStatement"
        label="Personal Statement"
        inputChange={statementChangeHandler}
        inputBlur={statementBlurHandler}
        inputValue={statementValue}
        inputPlaceholder="Describe yourself & your goals in 2-3 sentences."
        inputAs="textarea"
        required
      />
      <FormButton />
    </StyledForm>
  );
};

export default PersonalForm;
