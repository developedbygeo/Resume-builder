import { Container } from './Container.styled';
import { CtaButton } from './Button.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const submittedFormLayout = (field, setStateFn) => {
  return (
    <Container className="editContainer" direction="row">
      <h3>{field} submitted!</h3>
      <CtaButton
        title={`Edit your ${field.toLowerCase()}`}
        onClick={setStateFn}
      >
        <FontAwesomeIcon icon={faPencilAlt} />
      </CtaButton>
    </Container>
  );
};

export default submittedFormLayout;
