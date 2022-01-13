import { Container, StyledSection } from '../shared/Container.styled';
import EducationForm from './EducationForm';

const Education = () => {
  return (
    <StyledSection>
      <h1>Education</h1>
      <Container direction="row">
        <EducationForm />
      </Container>
    </StyledSection>
  );
};

export default Education;
