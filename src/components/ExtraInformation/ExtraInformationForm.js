import useForm from '../../hooks/useForm';
import useInput from '../../hooks/useInput';
import { useContext } from 'react';
import { InfoContext } from '../../store/infoContext';
import { validation } from '../shared/validation';
import StyledForm from '../shared/Form.styled';
import FormInput from '../shared/FormInput';
import FormButton from '../shared/FormButton';
import { errors } from '../shared/validation';

const ExtraInformationForm = () => {
  const { addExtraInfo } = useContext(InfoContext);
  const [isSubmitted, formSubmissionHandler, setIsSubmitted] = useForm(
    addExtraInfo,
    false
  );

  const {
    value: skills,
    isValueValid: areSkillsValid,
    hasError: skillsHaveError,
    inputChangeHandler: skillsChangeHandler,
    inputBlurHandler: skillsBlurHandler,
  } = useInput(validation.validateExtra);

  const {
    value: languages,
    isValueValid: areLanguagesValid,
    hasError: languagesHaveError,
    inputChangeHandler: languagesChangeHandler,
    inputBlurHandler: languagesBlurHandler,
  } = useInput(validation.validateExtra);

  const isFormValid = areSkillsValid && areLanguagesValid;

  const formattedSkills =
    skills !== '' ? skills.split(',').map((el) => el.trim()) : null;

  const formattedLanguages =
    languages !== '' ? languages.split(',').map((el) => el.trim()) : null;

  const dispatchData = {
    skills: formattedSkills,
    languages: formattedLanguages,
  };

  return !isSubmitted ? (
    <StyledForm
      onSubmit={(e) => formSubmissionHandler(e, isFormValid, dispatchData)}
      autocomplete="off"
    >
      <FormInput
        className={skillsHaveError && 'invalid'}
        errorMessage={errors.errorExtra}
        htmlFor="skills"
        inputId="skills"
        label="Skills (optional - up to 5)"
        inputChange={skillsChangeHandler}
        inputBlur={skillsBlurHandler}
        inputValue={skills}
        inputPlaceholder="eg. Time Management, Leadership, Communication"
        inputType="text"
      />
      <FormInput
        className={languagesHaveError && 'invalid'}
        errorMessage={errors.errorExtra}
        htmlFor="languages"
        inputId="languages"
        label="Languages - (optional - up to 5)"
        inputChange={languagesChangeHandler}
        inputBlur={languagesBlurHandler}
        inputValue={languages}
        inputPlaceholder="eg. Spanish, French, Italian"
        inputType="text"
      />
      <FormButton disabled={!isFormValid} />
    </StyledForm>
  ) : (
    submittedFormLayout('Skills and languages', () => setIsSubmitted(false))
  );
};

export default ExtraInformationForm;
