import { Container } from '../shared/Container.styled';

const PreviewSkills = ({ skills }) => {
  const renderedSkills = skills.map((skill, index) => {
    return <li key={index}>{skill}</li>;
  });

  return (
    <Container grid={true} contWidth="100%">
      <div className="headerWrapper">
        <h4>Skills</h4>
      </div>
      <ul className="skills">{renderedSkills}</ul>
    </Container>
  );
};

export default PreviewSkills;
