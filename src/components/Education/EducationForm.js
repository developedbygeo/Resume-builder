import { useContext, useRef } from 'react';
import { InfoContext } from '../../store/infoContext';
import useToggle from '../../hooks/useToggle';
import useInput from '../../hooks/useInput';
import useForm from '../../hooks/useForm';
import {
  validation,
  errors,
  currentYear,
  currentMonth,
  currentDay,
} from '../shared/validation';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';
import submittedFormLayout from '../shared/layout';

const EducationForm = () => {
  const { addEducation } = useContext(InfoContext);
  const currentToggleRef = useRef();
  const [isSubmitted, formSubmissionHandler, setIsSubmitted] = useForm(
    addEducation,
    true
  );

  const {
    value: school,
    isValueValid: isSchoolValid,
    hasError: schoolHasError,
    inputChangeHandler: schoolChangeHandler,
    inputBlurHandler: schoolBlurHandler,
  } = useInput(validation.validateTextNumbers);

  const {
    value: degree,
    isValueValid: isDegreeValid,
    hasError: degreeHasError,
    inputChangeHandler: degreeChangeHandler,
    inputBlurHandler: degreeBlurHandler,
  } = useInput(validation.validateTextNumbers);

  const {
    value: from,
    isValueValid: isSchoolFromValid,
    hasError: schoolFromHasError,
    inputChangeHandler: schoolFromChangeHandler,
    inputBlurHandler: schoolFromBlurHandler,
  } = useInput(validation.validateStartingDate);

  const {
    value: to,
    isValueValid: isSchoolToValid,
    hasError: schoolToHasError,
    inputChangeHandler: schoolToChangeHandler,
    inputBlurHandler: schoolToBlurHandler,
  } = useInput(validation.validateEndingDate);

  const {
    value: description,
    isValueValid: isDescriptionValid,
    hasError: descriptionHasError,
    inputChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
  } = useInput(validation.validateOptional);

  const [endDateExists, toggleChangeHandler, isToggleActivated] = useToggle(to);

  const isFormValid =
    isSchoolValid &&
    isDegreeValid &&
    isSchoolFromValid &&
    isSchoolToValid &&
    isDescriptionValid &&
    endDateExists;

  const dispatchData = { school, degree, from, to, description };

  return !isSubmitted ? (
    <StyledForm
      onSubmit={(e) => formSubmissionHandler(e, isFormValid, dispatchData)}
      autoComplete="off"
    >
      <FormInput
        className={schoolHasError && 'invalid'}
        errorMessage={errors.errorGeneric('school')}
        htmlFor="school"
        inputId="school"
        label="School"
        inputChange={schoolChangeHandler}
        inputBlur={schoolBlurHandler}
        inputValue={school}
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
        inputValue={degree}
        inputPlaceholder="eg. MSc Mechanical Engineering"
        inputType="text"
        required
      />
      <FormInput
        className={schoolFromHasError && 'invalid'}
        errorMessage={errors.errorDateFrom}
        htmlFor="educationfrom"
        inputId="educationfrom"
        label="From"
        inputChange={schoolFromChangeHandler}
        inputBlur={schoolFromBlurHandler}
        inputValue={from}
        inputType="date"
        minConstraint={`${currentYear - 60}-01-01`}
        maxConstraint={`${currentYear}-${currentMonth}-${currentDay}`}
        required
      />
      <FormInput
        className={schoolToHasError && 'invalid'}
        errorMessage={errors.errorDateTo}
        htmlFor="educationto"
        inputId="educationto"
        label="To"
        inputChange={schoolToChangeHandler}
        inputBlur={schoolToBlurHandler}
        inputValue={to}
        inputType="date"
      />
      <FormInput
        className={descriptionHasError && 'invalid'}
        errorMessage={errors.errorSchoolDesc}
        htmlFor="edudescription"
        inputId="edudescription"
        label="Description"
        inputChange={descriptionChangeHandler}
        inputBlur={descriptionBlurHandler}
        inputValue={description}
        inputAs="textarea"
        inputPlaceholder="(Optional) Can include information such as: Graduated with Honors/Distinction, majored in Engineering, GPA, etc. Up to 200 characters"
      />
      <FormInput
        isToggle={true}
        inputChange={toggleChangeHandler}
        inputChecked={isToggleActivated}
        className={!endDateExists && 'invalid'}
        errorMessage={errors.timeFrameTip('education', 'studying')}
        ref={currentToggleRef}
        toggleTitle="I am still studying here"
        htmlFor="currentlyStudying"
        inputId="currentlyStudying"
        label="Currently studying"
      />
      <FormButton disabled={!isFormValid} />
    </StyledForm>
  ) : (
    submittedFormLayout('Education details', () => setIsSubmitted(false))
  );
};

export default EducationForm;
