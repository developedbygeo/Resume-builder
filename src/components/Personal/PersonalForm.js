import useInput from '../../hooks/useInput';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import { InfoContext } from '../../store/infoContext';
import { errors, validation } from '../shared/validation';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';
import submittedFormLayout from '../shared/layout';

const PersonalForm = () => {
  const { addPersonal } = useContext(InfoContext);
  const [isSubmitted, formSubmissionHandler, setIsSubmitted] =
    useForm(addPersonal);

  const {
    value: firstName,
    isValueValid: isFNameValid,
    hasError: fNameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(validation.validateGeneric);

  const {
    value: lastName,
    isValueValid: isLastNameValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput(validation.validateGeneric);

  const {
    value: personalStatement,
    isValueValid: isStatementValid,
    hasError: statementHameHasError,
    inputChangeHandler: statementChangeHandler,
    inputBlurHandler: statementBlurHandler,
  } = useInput(validation.validateText);

  const isFormValid = isFNameValid && isLastNameValid && isStatementValid;

  const dispatchData = { firstName, lastName, personalStatement };

  return !isSubmitted ? (
    <StyledForm
      onSubmit={(e) => {
        formSubmissionHandler(e, isFormValid, dispatchData);
      }}
      autoComplete="off"
    >
      <FormInput
        className={fNameHasError && 'invalid'}
        errorMessage={errors.errorGeneric('first name')}
        htmlFor="firstName"
        inputId="firstName"
        label="First Name"
        inputChange={nameChangeHandler}
        inputBlur={nameBlurHandler}
        inputValue={firstName}
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
        inputValue={lastName}
        inputPlaceholder="Your full last name"
        inputType="text"
        required
      />
      <FormInput
        className={statementHameHasError && 'invalid'}
        errorMessage={errors.errorTextarea('personal statement')}
        htmlFor="personalStatement"
        inputId="personalStatement"
        label="Personal Statement"
        inputChange={statementChangeHandler}
        inputBlur={statementBlurHandler}
        inputValue={personalStatement}
        inputPlaceholder="Describe yourself & your goals in 2-3 sentences."
        inputAs="textarea"
        required
      />
      <FormButton disabled={!isFormValid} />
    </StyledForm>
  ) : (
    submittedFormLayout('Personal details', () => setIsSubmitted(false))
  );
};

export default PersonalForm;
