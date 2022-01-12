import { StyledSection, Container } from '../shared/Container.styled';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <StyledSection maxHeight="auto">
      <h1>Contact Information</h1>
      <Container direction="row">
        <ContactForm />
      </Container>
    </StyledSection>
  );
};

export default Contact;
