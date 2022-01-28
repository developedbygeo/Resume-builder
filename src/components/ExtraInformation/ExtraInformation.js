import { useState } from 'react';
import { Container, StyledSection } from '../shared/Container.styled';
import { AddMoreDetails } from '../shared/Button.styled';
import ExtraInformationForm from './ExtraInformationForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ExtraInformation = () => {
  const [toggleExtra, setToggleExtra] = useState(false);
  const [shouldToggleShow, setShouldToggleShow] = useState(true);

  const submissionCheckHandler = () => {
    setShouldToggleShow(false);
  };

  const toggleExtraHandler = () => {
    setToggleExtra((prevState) => !prevState);
  };

  const toggleIcon = toggleExtra ? (
    <FontAwesomeIcon icon={faChevronUp} />
  ) : (
    <FontAwesomeIcon icon={faChevronDown} />
  );

  const buttonToggle = shouldToggleShow && (
    <AddMoreDetails onClick={toggleExtraHandler}>
      Toggle skills & languages (optional) {toggleIcon}
    </AddMoreDetails>
  );

  const showFormLayout = toggleExtra && (
    <Container direction="row">
      <ExtraInformationForm checkSubmission={submissionCheckHandler} />
    </Container>
  );

  return (
    <StyledSection>
      <h1>Skills & Languages</h1>
      {buttonToggle}
      {showFormLayout}
    </StyledSection>
  );
};

export default ExtraInformation;
