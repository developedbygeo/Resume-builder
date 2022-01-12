import StyledForm from '../shared/Form.styled';
import { Input, Label } from '../shared/Input.styled';
import { Container } from '../shared/Container.styled';
import Toggle from '../shared/Toggle/Toggle';

const EmploymentForm = () => {
  return (
    <StyledForm>
      <Container>
        <Label htmlFor="title">Job Title</Label>
        <Input
          id="title"
          type="text"
          placeholder="eg. Software Developer"
          required
        />
      </Container>
      <Container>
        <Label htmlFor="employer">Employer</Label>
        <Input id="employer" type="text" placeholder="eg. Google" required />
      </Container>
      <Container>
        <Label htmlFor="startdate">From</Label>
        <Input id="startdate" type="date" required />
      </Container>
      <Container>
        <Label htmlFor="enddate">To</Label>
        <Input id="enddate" type="date" required />
      </Container>
      <Container>
        <Label htmlFor="stillhere">Currently working here</Label>
        <Toggle />
      </Container>
      <Container>
        <Label htmlFor="joblocation">City</Label>
        <Input
          id="joblocation"
          type="text"
          required
          placeholder="eg. Edinburgh"
        />
      </Container>
      <Container>
        <Label htmlFor="jobdescription">Description</Label>
        <Input
          id="jobdescription"
          type="text"
          as="textarea"
          required
          placeholder="Briefly provide your tasks and accomplishments"
        />
      </Container>
    </StyledForm>
  );
};

export default EmploymentForm;
