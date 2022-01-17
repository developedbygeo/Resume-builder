import { useState } from 'react';
import { StyledSection, Container } from '../shared/Container.styled';
import { AddMoreDetails } from '../shared/Button.styled';
import PersonalPhoto from './PersonalPhoto';
import PersonalForm from './PersonalForm';
import { CtaButton } from '../shared/Button.styled';
import PersonalAdditionalForm from './PersonalAdditionalForm';

const Personal = () => {
  const [toggleMoreDetails, setToggleMoreDetails] = useState(false);
  const [persFormSubmitted, setPersFormSubmitted] = useState(false);
  const [additionalFormSubmitted, setAdditionalFormSubmitted] = useState(false);

  const moreDetailsHandler = () => {
    setToggleMoreDetails((prevState) => !prevState);
  };

  const checkSubmissionHandler = (status) => {
    const formIdentifier =
      'personalForm' in status
        ? setPersFormSubmitted
        : setAdditionalFormSubmitted;
    formIdentifier(Object.values(status)[0]);
  };

  const retrievePFFormHandler = () => {
    setPersFormSubmitted(false);
  };

  const retrieveAdditionalFormHandler = () => {
    setAdditionalFormSubmitted(false);
  };

  const postSubmissionLayout = (field, retrieveFn) => {
    return (
      <Container className="editContainer" direction="row">
        <h3>{field} submitted!</h3>
        <CtaButton onClick={retrieveFn}>Edit</CtaButton>
      </Container>
    );
  };

  const personalFormLayout = !persFormSubmitted ? (
    <Container direction="row">
      <PersonalForm checkSubmission={checkSubmissionHandler} />
      <PersonalPhoto />
    </Container>
  ) : (
    postSubmissionLayout('Personal details', retrievePFFormHandler)
  );

  const additionalFormLayout = !additionalFormSubmitted ? (
    <AddMoreDetails onClick={moreDetailsHandler}>
      Toggle additional details ▼
    </AddMoreDetails>
  ) : (
    postSubmissionLayout('Additional details', retrieveAdditionalFormHandler)
  );

  return (
    <StyledSection marginTop="3rem">
      <h1>Personal Details</h1>
      {personalFormLayout}
      {additionalFormLayout}
      {toggleMoreDetails && (
        <PersonalAdditionalForm checkSubmission={checkSubmissionHandler} />
      )}
    </StyledSection>
  );
};

export default Personal;
