import { useState } from 'react';
import { StyledSection, Container } from '../shared/Container.styled';
import { AddMoreDetails } from '../shared/Button.styled';
import PersonalPhoto from './PersonalPhoto';
import PersonalForm from './PersonalForm';
import PersonalAdditionalForm from './PersonalAdditionalForm';

const Personal = () => {
  const [toggleMoreDetails, setToggleMoreDetails] = useState(false);
  const [additionalFormSubmitted, setAdditionalFormSubmitted] = useState(false);

  const moreDetailsHandler = () => {
    setToggleMoreDetails((prevState) => !prevState);
  };

  const checkSubmissionHandler = (status) => {
    if ('additionalForm' in status) {
      setAdditionalFormSubmitted(true);
    }
  };

  const toggleIcon = toggleMoreDetails ? '▲' : '▼';

  const shouldToggleAppear = !additionalFormSubmitted && (
    <AddMoreDetails onClick={moreDetailsHandler}>
      Toggle additional details {toggleIcon}
    </AddMoreDetails>
  );

  return (
    <StyledSection marginTop="3rem">
      <h1>Personal Details</h1>
      <Container direction="row">
        <PersonalForm />
        <PersonalPhoto />
      </Container>
      {shouldToggleAppear}
      {toggleMoreDetails && (
        <PersonalAdditionalForm checkSubmission={checkSubmissionHandler} />
      )}
    </StyledSection>
  );
};

export default Personal;
