import useInput from '../../hooks/useInput';
import { validation, errors } from '../shared/validation';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';

const validateText = (val) => val;

const EducationForm = () => {
  const {
    value: schoolValue,
    isValueValid: isSchoolValid,
    hasError: schoolHasError,
    inputChangeHandler: schoolChangeHandler,
    inputBlurHandler: schoolBlurHandler,
  } = useInput(validation.validatetextAndSpaces);

  const {
    value: degreeValue,
    isValueValid: isDegreeValid,
    hasError: degreeHasError,
    inputChangeHandler: degreeChangeHandler,
    inputBlurHandler: degreeBlurHandler,
  } = useInput(validation.validatetextAndSpaces);

  const {
    value: schoolStartValue,
    isValueValid: isSchoolStartValid,
    hasError: schoolStartHasError,
    inputChangeHandler: schoolStartChangeHandler,
    inputBlurHandler: schoolStartBlurHandler,
  } = useInput(validation.validateStartingDate);

  const {
    value: schoolEndValue,
    isValueValid: isSchoolEndValid,
    hasError: schoolEndHasError,
    inputChangeHandler: schoolEndChangeHandler,
    inputBlurHandler: schoolEndBlurHandler,
  } = useInput(validation.validateEndingDate);

  const {
    value: schoolDescValue,
    isValueValid: isSchoolDescValid,
    hasError: schoolDescHasError,
    inputChangeHandler: schoolDescChangeHandler,
    inputBlurHandler: schoolDescBlurHandler,
  } = useInput(validation.validateOptional);

  const isFormValid =
    isSchoolValid &&
    isDegreeValid &&
    isSchoolStartValid &&
    isSchoolEndValid &&
    isSchoolDescValid;

  return (
    <StyledForm autoComplete="off">
      <FormInput
        className={schoolHasError && 'invalid'}
        errorMessage={errors.errorGeneric('school')}
        htmlFor="school"
        inputId="school"
        label="School"
        inputChange={schoolChangeHandler}
        inputBlur={schoolBlurHandler}
        inputValue={schoolValue}
        inputPlaceholder="eg. King's College"
        inputType="text"
        required
      />
      <FormInput
        className={degreeHasError && 'invalid'}
        errorMessage={errors.errorGeneric('degree title')}
        htmlFor="degree"
        inputId="degree"
        label="Degree"
        inputChange={degreeChangeHandler}
        inputBlur={degreeBlurHandler}
        inputValue={degreeValue}
        inputPlaceholder="eg. MSc Mechanical Engineering"
        inputType="text"
        required
      />
      <FormInput
        className={schoolStartHasError && 'invalid'}
        errorMessage={errors.errorDateFrom}
        htmlFor="educationfrom"
        inputId="educationfrom"
        label="From"
        inputChange={schoolStartChangeHandler}
        inputBlur={schoolStartBlurHandler}
        inputValue={schoolStartValue}
        inputType="date"
        required
      />
      <FormInput
        className={schoolEndHasError && 'invalid'}
        errorMessage={errors.errorDateTo}
        htmlFor="educationto"
        inputId="educationto"
        label="To"
        inputChange={schoolEndChangeHandler}
        inputBlur={schoolEndBlurHandler}
        inputValue={schoolEndValue}
        inputType="date"
        required
      />
      <FormInput
        className={schoolDescHasError && 'invalid'}
        errorMessage={errors.errorSchoolDesc}
        htmlFor="edudescription"
        inputId="edudescription"
        label="Description"
        inputChange={schoolDescChangeHandler}
        inputBlur={schoolDescBlurHandler}
        inputValue={schoolDescValue}
        inputAs="textarea"
        inputPlaceholder="(Optional) Can include information such as: Graduated with Honors/Distinction, majored in Engineering, GPA, etc. Up to 200 characters"
      />
      <FormInput
        isToggle={true}
        toggleTitle="I am still studying here"
        htmlFor="currentlyStudying"
        inputId="currentlyStudying"
        label="Currently studying"
      />
      <FormButton disabled={!isFormValid} />
    </StyledForm>
  );
};

export default EducationForm;
