import StyledForm from '../shared/Form.styled';
import { Container } from '../shared/Container.styled';
import { CtaButton } from '../shared/Button.styled';
import { Input, Label } from '../shared/Input.styled';

const ContactForm = () => {
  return (
    <StyledForm>
      <Container className="contLeft">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="eg. boat@mcboatface.com"
          required
        />
      </Container>
      <Container className="contLeft">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="eg. +44 1234 123456"
          required
        />
      </Container>
      <Container className="contLeft">
        <Label htmlFor="linkedin">LinkedIn</Label>
        <Input
          id="linkedin"
          type="url"
          placeholder="eg. in/example-mcexample"
          required
        />
      </Container>
      <Container>
        <CtaButton>Save</CtaButton>
      </Container>
    </StyledForm>
  );
};

export default ContactForm;
