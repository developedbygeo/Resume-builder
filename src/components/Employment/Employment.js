import _ from 'lodash';
import { useState, useContext } from 'react';
import { InfoContext } from '../../store/infoContext';
import { Container, StyledSection } from '../shared/Container.styled';
import { AddMoreDetails } from '../shared/Button.styled';
import EmploymentForm from './EmploymentForm';

const Employment = () => {
  const {
    defaultState: { information },
  } = useContext(InfoContext);
  const [originalFormSubmitted, setOriginalFormSubmitted] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [additionalForms, setAdditionalForms] = useState([]);

  const submissionIdentifier = Object.keys(information).filter((key) =>
    key.includes('employ')
  ).length;

  const submissionHandler = () => {
    setOriginalFormSubmitted(true);
    setShowButton(true);
  };
  const extraFormsSubmissionHandler = () => {
    setShowButton(true);
  };

  const addNewHandler = () => {
    setShowButton(false);
    setAdditionalForms((prevState) => [
      ...prevState,
      <EmploymentForm
        submissionCheck={extraFormsSubmissionHandler}
        identifier={`emp-${submissionIdentifier + 1}`}
      />,
    ]);
  };

  const addNewFormBtn = originalFormSubmitted && showButton && (
    <AddMoreDetails onClick={addNewHandler}>
      Add more employment history
    </AddMoreDetails>
  );

  const additionalForm = additionalForms.map((form, index) => (
    <Container direction="row" key={index}>
      {form}
    </Container>
  ));

  return (
    <StyledSection>
      <h1>Employment History</h1>
      <Container direction="row">
        <EmploymentForm submissionCheck={submissionHandler} />
      </Container>
      {additionalForm}
      {addNewFormBtn}
    </StyledSection>
  );
};

export default Employment;
