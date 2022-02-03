import { Container } from '../shared/Container.styled';

const PreviewMain = ({ personal }) => {
  const detailsExist = Object.values(personal).every(
    (field) => field.length > 0
  );

  return (
    <Container grid={true} gridColumns="">
      {detailsExist && (
        <>
          <h1>{`${personal.firstName} ${personal.lastName}`}</h1>
          <h2>{personal.role}</h2>
          <Container grid={true}>
            <h3>Objective</h3>
            <p>{personal.personalStatement}</p>
          </Container>
        </>
      )}
    </Container>
  );
};

export default PreviewMain;
