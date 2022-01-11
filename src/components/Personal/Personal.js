import Form from '../shared/Form/Form';
import {
  StyledSection,
  ImgContainer,
  Container,
} from '../shared/Container.styled';
import { ImgInput } from '../shared/Input.styled';

const personalDetails = [
  {
    label: 'First Name',
    placeholder: 'Your first name',
    required: true,
    id: 1,
    type: 'text',
  },
  {
    label: 'Last Name',
    placeholder: 'Your last name',
    required: true,
    id: 2,
    type: 'text',
  },
  {
    label: 'Personal Statement',
    placeholder: 'Describe yourself & your goals in a few words',
    required: true,
    description: true,
    id: 3,
    type: 'text',
  },
];

const Personal = () => {
  return (
    <StyledSection maxHeight="auto" marginTop="3rem">
      <h1>Personal Details</h1>
      <Container direction="row">
        <Form
          formDetails={personalDetails}
          labelColor="#1D3557"
          alignItems="flex-start"
          prefWidth="90%"
          btnWidth="70%"
          btnAlign="flex-end"
        />
        <ImgContainer>
          <ImgInput title="Provide your photo (optional)" type="file" />
        </ImgContainer>
      </Container>
    </StyledSection>
  );
};

export default Personal;
