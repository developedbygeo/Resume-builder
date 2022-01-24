import useExtra from '../../hooks/useExtra';
import { Container, StyledSection } from '../shared/Container.styled';
import EmploymentForm from './EmploymentForm';

const Employment = () => {
  const [originalSubmissionHandler, addNewFormBtn, formsToRender] =
    useExtra('employment');

  return (
    <StyledSection>
      <h1>Employment History</h1>
      <Container direction="row">
        <EmploymentForm submissionCheck={originalSubmissionHandler} />
      </Container>
      {formsToRender}
      {addNewFormBtn}
    </StyledSection>
  );
};

export default Employment;
