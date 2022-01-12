import { Container, StyledSection } from '../shared/Container.styled';
import EmploymentForm from './EmploymentForm';

const Employment = () => {
  return (
    <StyledSection>
      <h1>Employment History</h1>
      <Container direction="row">
        <EmploymentForm />
      </Container>
    </StyledSection>
  );
};

export default Employment;
