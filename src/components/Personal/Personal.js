import { useState } from 'react';
import {
  StyledSection,
  ImgContainer,
  Container,
} from '../shared/Container.styled';
import { ImgInput } from '../shared/Input.styled';
import { AddMoreDetails } from '../shared/Button.styled';
import PersonalForm from './PersonalForm';
import PersonalAdditionalForm from './PersonalAdditionalForm';

const Personal = () => {
  const [toggleMoreDetails, setToggleMoreDetails] = useState(false);

  const moreDetailsHandler = () => {
    setToggleMoreDetails((prevState) => !prevState);
  };

  return (
    <StyledSection maxHeight="auto" marginTop="3rem">
      <h1>Personal Details</h1>
      <Container direction="row">
        <PersonalForm />
        <ImgContainer>
          <ImgInput title="Provide your photo (optional)" type="file" />
        </ImgContainer>
      </Container>
      <AddMoreDetails onClick={moreDetailsHandler}>
        Toggle additional details ▼
      </AddMoreDetails>
      {toggleMoreDetails && <PersonalAdditionalForm />}
    </StyledSection>
  );
};

export default Personal;
