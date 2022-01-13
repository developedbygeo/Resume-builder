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
    <StyledForm>
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
        htmlFor="currentlyStudying"
        inputId="currentlyStudying"
        label="Currently studying"
      />

      {/* <Container>
        <Label htmlFor="school">School</Label>
        <Input id="school" type="text" required />
      </Container>
      <Container>
        <Label htmlFor="degree">Degree</Label>
        <Input id="degree" type="text" required />
      </Container>
      <Container>
        <Label htmlFor="educationfrom">From</Label>
        <Input id="educationfrom" type="date" required />
      </Container>
      <Container>
        <Label htmlFor="educationto">To</Label>
        <Input id="educationto" type="date" required />
      </Container>
      <Container>
        <Label htmlFor="currentlystudying">Currently studying here</Label>
        <Toggle id="currentlystudying" />
      </Container>
      <Container>
        <Label htmlFor="edudescription">Description</Label>
        <Input
          id="edudescription"
          as="textarea"
          placeholder="eg. Graduated with Honors/Distinction, majored in Engineering, GPA, etc"
        />
      </Container>
      <Container>
        <CtaButton type="submit">Save</CtaButton>
      </Container> */}
      <FormButton />
    </StyledForm>
  );
};

export default EducationForm;
