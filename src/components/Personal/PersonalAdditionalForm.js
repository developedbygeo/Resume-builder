import useInput from '../../hooks/useInput';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';

const validateText = (val) => val.trim().length > 2;

const PersonalAdditionalForm = () => {
  const {
    value: countryValue,
    isValueValid: isCountryValid,
    hasError: countryHasError,
    inputChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
  } = useInput(validateText);

  const {
    value: cityValue,
    isValueValid: isCityValid,
    hasError: cityHasError,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput(validateText);

  const {
    value: postalValue,
    isValueValid: isPostalValid,
    hasError: postalHasError,
    inputChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
  } = useInput(validateText);

  return (
    <StyledForm>
      <FormInput
        htmlFor="country"
        inputId="country"
        label="Country"
        inputChange={countryChangeHandler}
        inputBlur={countryBlurHandler}
        inputValue={countryValue}
        inputPlaceholder="eg. United Kingdom"
        inputType="text"
      />
      <FormInput
        htmlFor="city"
        inputId="city"
        label="City"
        inputChange={cityChangeHandler}
        inputBlur={cityBlurHandler}
        inputValue={cityValue}
        inputPlaceholder="eg. United Kingdom"
        inputType="text"
      />
      <FormInput
        htmlFor="postal"
        inputId="postal"
        label="Postal Code"
        inputChange={postalChangeHandler}
        inputBlur={postalBlurHandler}
        inputValue={postalValue}
        inputPlaceholder="eg. G40PS"
        inputType="text"
      />
      <FormButton />
    </StyledForm>
  );
};

export default PersonalAdditionalForm;
