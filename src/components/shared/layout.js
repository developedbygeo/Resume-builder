import { Container } from './Container.styled';
import { CtaButton } from './Button.styled';

const submittedFormLayout = (field, setStateFn) => {
  return (
    <Container className="editContainer" direction="row">
      <h3>{field} submitted!</h3>
      <CtaButton
        title={`Edit your ${field.toLowerCase()}`}
        onClick={setStateFn}
      >
        Edit
      </CtaButton>
    </Container>
  );
};

export default submittedFormLayout;
