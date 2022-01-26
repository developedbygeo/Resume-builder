import { useState, useContext } from 'react';
import { InfoContext } from '../store/infoContext';
import EmploymentForm from '../components/Employment/EmploymentForm';
import EducationForm from '../components/Education/EducationForm';
import { Container } from '../components/shared/Container.styled';
import { AddMoreDetails } from '../components/shared/Button.styled';

const useExtra = (componentIdentifier) => {
  const [originalFormSubmitted, setOriginalFormSubmitted] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const {
    defaultState: { information },
  } = useContext(InfoContext);
  const [additionalForms, setAdditionalForms] = useState([]);

  const originalSubmissionHandler = () => {
    setOriginalFormSubmitted(true);
    setShowButton(true);
  };

  const extraSubmissionHandler = () => {
    setShowButton(true);
  };

  const ctxIdentifier = componentIdentifier === 'employment' ? 'employ' : 'edu';

  const buttonText =
    componentIdentifier === 'employment' ? componentIdentifier : 'education';

  const newFormIdentifier = Object.keys(information).filter((key) =>
    key.includes(ctxIdentifier)
  ).length;

  const componentToRender =
    ctxIdentifier === 'employ' ? (
      <EmploymentForm
        submissionCheck={extraSubmissionHandler}
        identifier={`emp-${newFormIdentifier + 1}`}
      />
    ) : (
      <EducationForm
        submissionCheck={extraSubmissionHandler}
        identifier={`edu-${newFormIdentifier + 1}`}
      />
    );

  const addNewEntryHandler = () => {
    setShowButton(false);
    setAdditionalForms((prevState) => [...prevState, componentToRender]);
  };

  const addNewFormBtn = originalFormSubmitted && showButton && (
    <AddMoreDetails onClick={addNewEntryHandler}>
      Add more {buttonText} history
    </AddMoreDetails>
  );

  const formsToRender = additionalForms.map((form, index) => (
    <Container direction="row" key={index}>
      {form}
    </Container>
  ));

  return [originalSubmissionHandler, addNewFormBtn, formsToRender];
};

export default useExtra;
