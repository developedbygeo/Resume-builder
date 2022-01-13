import useInput from '../../hooks/useInput';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';

const validateName = (val) => val;

const ContactForm = () => {
  const {
    value: emailValue,
    isValueValid: isEmailValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(validateName);

  const {
    value: phoneValue,
    isValueValid: isPhoneValid,
    hasError: phoneHasError,
    inputChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput(validateName);

  const {
    value: urlValue,
    isValueValid: isUrlValid,
    hasError: urlHasError,
    inputChangeHandler: urlChangeHandler,
    inputBlurHandler: urlBlurHandler,
  } = useInput(validateName);

  return (
    <StyledForm>
      <FormInput
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
      <FormButton />
    </StyledForm>
  );
};

export default ContactForm;
