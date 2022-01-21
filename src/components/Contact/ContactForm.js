import useInput from '../../hooks/useInput';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import { InfoContext } from '../../store/infoContext';
import { errors, validation } from '../shared/validation';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';
import submittedFormLayout from '../shared/layout';

const ContactForm = () => {
  const { addContact } = useContext(InfoContext);
  const [isSubmitted, formSubmissionHandler, setIsSubmitted] =
    useForm(addContact);

  const {
    value: email,
    isValueValid: isEmailValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(validation.validateEmail);

  const {
    value: phone,
    isValueValid: isPhoneValid,
    hasError: phoneHasError,
    inputChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput(validation.validatePhone);

  const {
    value: linkedin,
    isValueValid: isUrlValid,
    hasError: urlHasError,
    inputChangeHandler: urlChangeHandler,
    inputBlurHandler: urlBlurHandler,
  } = useInput(validation.validateLinkedIn);

  const isFormValid = isEmailValid && isPhoneValid && isUrlValid;

  const dispatchData = { email, phone, linkedin };

  return !isSubmitted ? (
    <StyledForm
      onSubmit={(e) => formSubmissionHandler(e, isFormValid, dispatchData)}
      autoComplete="off"
    >
      <FormInput
        className={emailHasError && 'invalid'}
        errorMessage={errors.errorEmail}
        htmlFor="email"
        inputId="email"
        label="Email"
        inputChange={emailChangeHandler}
        inputBlur={emailBlurHandler}
        inputValue={email}
        inputPlaceholder="boat@mcboatface.com"
        inputType="email"
        required
      />
      <FormInput
        className={phoneHasError && 'invalid'}
        errorMessage={errors.errorGeneric('phone number')}
        htmlFor="phone"
        inputId="phone"
        label="Phone Number"
        inputChange={phoneChangeHandler}
        inputBlur={phoneBlurHandler}
        inputValue={phone}
        inputPlaceholder="eg. 44 1234 123456 (no spaces required)"
        inputType="tel"
        required
      />
      <FormInput
        className={urlHasError && 'invalid'}
        errorMessage={errors.errorLinkedin}
        htmlFor="linkedin"
        inputId="linkedin"
        label="LinkedIn Profile"
        inputChange={urlChangeHandler}
        inputBlur={urlBlurHandler}
        inputValue={linkedin}
        inputPlaceholder="in/example-mcexample"
        inputType="text"
        required
      />
      <FormButton disabled={!isFormValid} />
    </StyledForm>
  ) : (
    submittedFormLayout('Contact details', () => setIsSubmitted(false))
  );
};

export default ContactForm;
