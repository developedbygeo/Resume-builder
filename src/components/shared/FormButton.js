import { Container } from './Container.styled';
import { CtaButton } from './Button.styled';

const FormButton = ({ buttonText = 'Save', disabled = true }) => {
  const buttonMessage = disabled
    ? 'Please fill out the fields above to continue'
    : 'Save this form';

  return (
    <Container>
      <CtaButton disabled={disabled} type="submit" title={buttonMessage}>
        {buttonText}
      </CtaButton>
    </Container>
  );
};

export default FormButton;
