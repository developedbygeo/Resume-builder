import { Container } from './Container.styled';
import { CtaButton } from './Button.styled';

const FormButton = ({ buttonText = 'Save' }) => {
  return (
    <Container>
      <CtaButton type="submit" title="Save this form">
        {buttonText}
      </CtaButton>
    </Container>
  );
};

export default FormButton;
