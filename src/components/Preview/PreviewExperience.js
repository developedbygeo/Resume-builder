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
    <>
      <h3>{employment.title}</h3>
      {datesExist && (
        <p>{`${employment.employer} | ${startDate} - ${endDate}`}</p>
      )}
      <p className="desc">{employment.description}</p>
    </>
  ) : (
    <>
      <h3>{education.degree}</h3>
      {datesExist && <p>{`${education.school} | ${startDate}-${endDate}`}</p>}
      {descriptionExists && <p className="desc">{employment.description}</p>}
    </>
  );

  return experienceLayout;
};

export default PreviewExperience;
