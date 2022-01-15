import useInput from '../../hooks/useInput';
import { errors, validation } from '../shared/validation';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';

const PersonalForm = () => {
  const {
    value: nameValue,
    isValueValid: isFNameValid,
    hasError: fNameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(validation.validateGeneric);

  const {
    value: lastNameValue,
    isValueValid: isLastNameValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput(validation.validateGeneric);

  const {
    value: statementValue,
    isValueValid: isStatementValid,
    hasError: statementHameHasError,
    inputChangeHandler: statementChangeHandler,
    inputBlurHandler: statementBlurHandler,
  } = useInput(validation.validateText);

  const isFormValid = isFNameValid && isLastNameValid && isStatementValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (isFormValid) {
    }
  };

  return (
    <StyledForm onSubmit={formSubmitHandler} autoComplete="off">
      <FormInput
        className={fNameHasError && 'invalid'}
        errorMessage={errors.errorGeneric('first name')}
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
        className={lastNameHasError && 'invalid'}
        errorMessage={errors.errorGeneric('last name')}
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
        className={statementHameHasError && 'invalid'}
        errorMessage={errors.errorPersonalStatement}
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
      <FormButton disabled={!isFormValid} />
    </StyledForm>
  );
};

export default PersonalForm;
