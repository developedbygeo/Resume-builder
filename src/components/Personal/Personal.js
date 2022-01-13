import { useState } from 'react';
import { StyledSection, Container } from '../shared/Container.styled';
import { AddMoreDetails } from '../shared/Button.styled';
import PersonalPhoto from './PersonalPhoto';
import PersonalForm from './PersonalForm';
import PersonalAdditionalForm from './PersonalAdditionalForm';

const Personal = () => {
  const [toggleMoreDetails, setToggleMoreDetails] = useState(false);

  const moreDetailsHandler = () => {
    setToggleMoreDetails((prevState) => !prevState);
  };

  return (
    <StyledSection marginTop="3rem">
      <h1>Personal Details</h1>
      <Container direction="row">
        <PersonalForm />
        <PersonalPhoto />
      </Container>
      <AddMoreDetails onClick={moreDetailsHandler}>
        Toggle additional details ▼
      </AddMoreDetails>
      {toggleMoreDetails && <PersonalAdditionalForm />}
    </StyledSection>
  );
};

export default Personal;
