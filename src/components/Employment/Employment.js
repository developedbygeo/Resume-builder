import { Container, StyledSection } from '../shared/Container.styled';
import EmploymentForm from './EmploymentForm';

const Employment = () => {
  // const additionalForm = (<EmploymentForm />)
  // or map a state object and add forms based on that

  console.log('re-evaluated');

  return (
    <StyledSection>
      <h1>Employment History</h1>
      <Container direction="row">
        <EmploymentForm />
        {/* {additionalForm} */}
      </Container>
    </StyledSection>
  );
};

export default Employment;
