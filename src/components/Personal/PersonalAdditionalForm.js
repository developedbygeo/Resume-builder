import useInput from '../../hooks/useInput';
import { useContext } from 'react';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';
import { validation, errors } from '../shared/validation';

const PersonalAdditionalForm = () => {
  const {
    value: countryValue,
    isValueValid: isCountryValid,
    hasError: countryHasError,
    inputChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
  } = useInput(validation.validateGeneric);

  const {
    value: cityValue,
    isValueValid: isCityValid,
    hasError: cityHasError,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput(validation.validateGeneric);

  const {
    value: postalValue,
    isValueValid: isPostalValid,
    hasError: postalHasError,
    inputChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
  } = useInput(validation.validatePostal);

  const isFormValid = isCountryValid && isCityValid && isPostalValid;

  return (
    <StyledForm autoComplete="off">
      <FormInput
        className={countryHasError && 'invalid'}
        errorMessage={errors.errorGeneric('country')}
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
        className={cityHasError && 'invalid'}
        errorMessage={errors.errorGeneric('city')}
        htmlFor="city"
        inputId="city"
        label="City"
        inputChange={cityChangeHandler}
        inputBlur={cityBlurHandler}
        inputValue={cityValue}
        inputPlaceholder="eg. Edinburgh"
        inputType="text"
      />
      <FormInput
        className={postalHasError && 'invalid'}
        errorMessage={errors.errorPostal}
        htmlFor="postal"
        inputId="postal"
        label="Postal Code"
        inputChange={postalChangeHandler}
        inputBlur={postalBlurHandler}
        inputValue={postalValue}
        inputPlaceholder="eg. G40PS"
        inputType="text"
      />
      <FormButton disabled={!isFormValid} />
    </StyledForm>
  );
};

export default PersonalAdditionalForm;
