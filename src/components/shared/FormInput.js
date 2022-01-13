import { Container } from './Container.styled';
import { Label, Input } from './Input.styled';
import Toggle from './Toggle/Toggle';

const FormInput = ({
  htmlFor,
  label,
  inputId,
  inputChange,
  inputBlur,
  inputType,
  inputValue,
  inputPlaceholder,
  required,
  inputAs,
  isToggle = false,
  toggleTitle,
}) => {
  const standardLayout = (
    <Container>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        id={inputId}
        onChange={inputChange}
        onBlur={inputBlur}
        type={inputType}
        value={inputValue}
        placeholder={inputPlaceholder}
        required={required}
        as={inputAs}
      />
    </Container>
  );

  const toggleLayout = (
    <Container>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Toggle title={toggleTitle} id={inputId} onChange={inputChange} />
    </Container>
  );

  const layout = isToggle ? toggleLayout : standardLayout;

  return layout;
};

export default FormInput;
