import useExtra from '../../hooks/useExtra';
import { Container, StyledSection } from '../shared/Container.styled';
import EducationForm from './EducationForm';

const Education = () => {
  const [originalSubmissionHandler, addNewFormBtn, formsToRender] =
    useExtra('education');

  return (
    <StyledSection>
      <h1>Education</h1>
      <Container direction="row">
        <EducationForm submissionCheck={originalSubmissionHandler} />
      </Container>
      {formsToRender}
      {addNewFormBtn}
    </StyledSection>
  );
};

export default Education;
