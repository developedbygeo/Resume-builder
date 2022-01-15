import useInput from '../../hooks/useInput';
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
  } = useInput(validateText);

  const {
    value: degreeValue,
    isValueValid: isDegreeValid,
    hasError: degreeHasError,
    inputChangeHandler: degreeChangeHandler,
    inputBlurHandler: degreeBlurHandler,
  } = useInput(validateText);

  const {
    value: schoolStartValue,
    isValueValid: isSchoolStartValid,
    hasError: schoolStartHasError,
    inputChangeHandler: schoolStartChangeHandler,
    inputBlurHandler: schoolStartBlurHandler,
  } = useInput(validateText);

  const {
    value: schoolEndValue,
    isValueValid: isSchoolEndValid,
    hasError: schoolEndHasError,
    inputChangeHandler: schoolEndChangeHandler,
    inputBlurHandler: schoolEndBlurHandler,
  } = useInput(validateText);

  const {
    value: schoolDescValue,
    isValueValid: isSchoolDescValid,
    hasError: schoolDescHasError,
    inputChangeHandler: schoolDescChangeHandler,
    inputBlurHandler: schoolDescBlurHandler,
  } = useInput(validateText);

  return (
    <StyledForm autoComplete="off">
      <FormInput
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
        htmlFor="edudescription"
        inputId="edudescription"
        label="Description"
        inputChange={schoolDescChangeHandler}
        inputBlur={schoolDescBlurHandler}
        inputValue={schoolDescValue}
        inputAs="textarea"
        inputPlaceholder="eg. Graduated with Honors/Distinction, majored in Engineering, GPA, etc"
        required
      />
      <FormInput
        isToggle={true}
        toggleTitle="I am still studying here"
        htmlFor="currentlyStudying"
        inputId="currentlyStudying"
        label="Currently studying"
      />
      <FormButton />
    </StyledForm>
  );
};

export default EducationForm;
