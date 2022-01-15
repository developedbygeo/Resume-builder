import useInput from '../../hooks/useInput';
import { errors, validation } from '../shared/validation';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';

const ContactForm = () => {
  const {
    value: emailValue,
    isValueValid: isEmailValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(validation.validateEmail);

  const {
    value: phoneValue,
    isValueValid: isPhoneValid,
    hasError: phoneHasError,
    inputChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput(validation.validatePhone);

  const {
    value: urlValue,
    isValueValid: isUrlValid,
    hasError: urlHasError,
    inputChangeHandler: urlChangeHandler,
    inputBlurHandler: urlBlurHandler,
  } = useInput(validation.validateLinkedIn);

  const isFormValid = isEmailValid && isPhoneValid && isUrlValid;

  return (
    <StyledForm autoComplete="off">
      <FormInput
        className={emailHasError && 'invalid'}
        errorMessage={errors.errorEmail}
        htmlFor="email"
        inputId="email"
        label="Email"
        inputChange={emailChangeHandler}
        inputBlur={emailBlurHandler}
        inputValue={emailValue}
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
        inputValue={phoneValue}
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
        inputValue={urlValue}
        inputPlaceholder="in/example-mcexample"
        inputType="text"
        required
      />
      <FormButton disabled={!isFormValid} />
    </StyledForm>
  );
};

export default ContactForm;
