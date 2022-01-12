import { Input, Label } from '../shared/Input.styled';
import { Container } from '../shared//Container.styled';
import { CtaButton } from '../shared//Button.styled';
import StyledForm from '../shared/Form.styled';

const PersonalAdditionalForm = () => {
  return (
    <StyledForm>
      <Container>
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          type="text"
          placeholder="eg. United Kingdom"
          required
        />
      </Container>
      <Container className="contLeft">
        <Label htmlFor="city">City</Label>
        <Input id="city" type="text" placeholder="eg. Glasgow" required />
      </Container>
      <Container>
        <Label htmlFor="postal">Postal Code</Label>
        <Input id="postal" type="text" placeholder="eg. G40PS" required />
      </Container>
      <Container>
        <CtaButton type="submit">Save</CtaButton>
      </Container>
    </StyledForm>
  );
};

export default PersonalAdditionalForm;
