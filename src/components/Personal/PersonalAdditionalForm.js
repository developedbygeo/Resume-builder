import useInput from '../../hooks/useInput';
import { useContext, useState } from 'react';
import { InfoContext } from '../../store/infoContext';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';
import { validation, errors } from '../shared/validation';
import submittedFormLayout from '../shared/layout';

const PersonalAdditionalForm = ({ checkSubmission }) => {
  const { addAdditional } = useContext(InfoContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    value: country,
    isValueValid: isCountryValid,
    hasError: countryHasError,
    inputChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
  } = useInput(validation.validateGeneric);

  const {
    value: city,
    isValueValid: isCityValid,
    hasError: cityHasError,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput(validation.validateGeneric);

  const {
    value: postal,
    isValueValid: isPostalValid,
    hasError: postalHasError,
    inputChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
  } = useInput(validation.validatePostal);

  const isFormValid = isCountryValid && isCityValid && isPostalValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    addAdditional({ country, city, postal });
    setIsSubmitted(true);
    checkSubmission({ additionalForm: true });
  };

  return !isSubmitted ? (
    <StyledForm onSubmit={formSubmitHandler} autocomplete="off">
      <FormInput
        className={countryHasError && 'invalid'}
        errorMessage={errors.errorGeneric('country')}
        htmlFor="country"
        inputId="country"
        label="Country"
        inputChange={countryChangeHandler}
        inputBlur={countryBlurHandler}
        inputValue={country}
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
        inputValue={city}
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
        inputValue={postal}
        inputPlaceholder="eg. G40PS"
        inputType="text"
      />
      <FormButton disabled={!isFormValid} />
    </StyledForm>
  ) : (
    submittedFormLayout('Additional details', () => setIsSubmitted(false))
  );
};

export default PersonalAdditionalForm;
