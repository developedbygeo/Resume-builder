import { Container } from '../shared/Container.styled';
const dateOptions = { month: 'short', year: 'numeric' };

const formattedDate = (date) => {
  if (date === 'present') {
    return 'Present';
  }
  if (date === '') {
    return;
  }
  return new Date(`${date}`).toLocaleString('en-GB', dateOptions);
};

const PreviewExperience = ({ employment, education }) => {
  const startDate = employment
    ? formattedDate(employment.from)
    : formattedDate(education.from);
  const endDate = employment
    ? formattedDate(employment.to)
    : formattedDate(education.to);

  const descriptionExists = education && education.description.length > 1;

  const datesExist = startDate && endDate;

  const experienceLayout = employment ? (
    <Container grid={true}>
      <h3>{employment.title}</h3>
      {datesExist && (
        <p className="dates">
          <span className="employerOrSchool">{employment.employer}</span>
          {`${startDate} - ${endDate}`}
        </p>
      )}
      <p className="desc">{employment.description}</p>
    </Container>
  ) : (
    <Container grid={true}>
      <h3>{education.degree}</h3>
      {datesExist && (
        <p className="dates">
          <span className="employerOrSchool">{education.school}</span>
          {`${startDate} - ${endDate}`}
        </p>
      )}
      {descriptionExists && <p className="desc">{education.description}</p>}
    </Container>
  );

  return experienceLayout;
};

export default PreviewExperience;
