import { Container } from '../shared/Container.styled';
import { shouldFieldRender } from '../shared/validation';

const PreviewMain = ({ personal }) => {
  const fieldCheck = shouldFieldRender(personal.firstName);

  const nameField = fieldCheck
    ? `${personal.firstName} ${personal.lastName}`
    : 'Full name';

  const roleField = fieldCheck ? `${personal.role}` : 'Your next role';

  const objectiveField = fieldCheck
    ? `${personal.personalStatement}`
    : 'Your personal statement, including goals & aspirations will be placed here once you fill in the respective form.';

  return (
    <Container grid={true} className="personalMain">
      <>
        <h1>{nameField}</h1>
        <h2>{roleField}</h2>
        <Container grid={true} className="description">
          <h3 className="previewHeader">Objective</h3>
          <p>{objectiveField}</p>
        </Container>
      </>
    </Container>
  );
};

export default PreviewMain;
