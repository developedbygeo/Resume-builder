import { useState } from 'react';
import { Container, StyledSection } from '../shared/Container.styled';
import { AddMoreDetails } from '../shared/Button.styled';
import ExtraInformationForm from './ExtraInformationForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ExtraInformation = () => {
  const [toggleExtra, setToggleExtra] = useState(false);

  const toggleExtraHandler = () => {
    setToggleExtra((prevState) => !prevState);
  };
  const toggleIcon = toggleExtra ? (
    <FontAwesomeIcon icon={faChevronUp} />
  ) : (
    <FontAwesomeIcon icon={faChevronDown} />
  );

  const showFormLayout = toggleExtra && (
    <Container direction="row">
      <ExtraInformationForm />
    </Container>
  );

  return (
    <StyledSection>
      <h1>Skills & Languages</h1>
      <AddMoreDetails onClick={toggleExtraHandler}>
        Toggle skills & languages (optional) {toggleIcon}
      </AddMoreDetails>
      {showFormLayout}
    </StyledSection>
  );
};

export default ExtraInformation;
