import { Input, Label } from '../shared/Input.styled';
import { Container } from '../shared//Container.styled';
import { CtaButton } from '../shared//Button.styled';
import StyledForm from '../shared/Form.styled';

const PersonalForm = () => {
  return (
    <StyledForm>
      <Container>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          type="text"
          placeholder="Provide your first & middle name (if any)"
          required
        />
      </Container>
      <Container>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          type="text"
          placeholder="Your full last name"
          required
        />
      </Container>
      <Container>
        <Label htmlFor="personalStatement">Personal Statement</Label>
        <Input
          id="personalStatement"
          as="textarea"
          placeholder="Describe yourself & your goals in 2-3 sentences."
          required
        />
      </Container>
      <Container>
        <CtaButton type="submit">Save</CtaButton>
      </Container>
    </StyledForm>
  );
};

export default PersonalForm;
