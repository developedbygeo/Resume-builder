import _ from 'lodash';
import { useState, useContext } from 'react';
import { InfoContext } from '../../store/infoContext';
import { Container, StyledSection } from '../shared/Container.styled';
import { AddMoreDetails } from '../shared/Button.styled';
import EmploymentForm from './EmploymentForm';

const Employment = () => {
  // const {
  //   information: { employment },
  // } = useContext(InfoContext);
  const ctx = useContext(InfoContext);
  const [originalFormSubmitted, setOriginalFormSubmitted] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showNewForm, setShowNewForm] = useState(false);
  // const additionalForm = (<EmploymentForm />)
  // or map a state object and add forms based on that

  // useEffect(() => {
  //   const currentKeys = Object.keys(information).filter((key) =>
  //     key.includes('_emp')
  //   );
  //   console.log(currentKeys);
  // }, [information]);

  // const submissionIdentifier = Object.keys(information).filter((key) =>
  //   key.includes('employ')
  // ).length;

  // const data = currentKeys.map((key) => key);
  // _.find(information, key));
  // console.log('reevaluated');
  // console.log(ctx);

  // const formsToBeRendered = currentKeys.map((form) => {
  //   const forms = currentKeys.map((form) => information[form]);
  //   console.log(forms);
  //   // can destructure here

  //   return (
  //     <Container direction="row">
  //       <EmploymentForm
  //         submissionCheck={extraFormsSubmissionHandler}
  //         identifier={`emp-${submissionIdentifier + 1}`}
  //         // existingValues =
  //       />
  //     </Container>
  //   );
  // });

  const submissionHandler = () => {
    setOriginalFormSubmitted(true);
    setShowButton(true);
  };

  const addNewHandler = () => {
    setShowButton(false);
    setShowNewForm(true);
  };

  const extraFormsSubmissionHandler = (identifier) => {
    setShowButton(true);
    console.log(identifier);
    // console.log(currentlySubForms);
    // setShowNewForm(false)
  };

  const addNewFormBtn = originalFormSubmitted && showButton && (
    <AddMoreDetails onClick={addNewHandler}>
      Add more employment history
    </AddMoreDetails>
  );

  const additionalForm = showNewForm && (
    <Container direction="row">
      <EmploymentForm
        submissionCheck={extraFormsSubmissionHandler}
        identifier={`emp-${submissionIdentifier + 1}`}
      />
    </Container>
  );

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
