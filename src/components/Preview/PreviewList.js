import { Container } from '../shared/Container.styled';

const PreviewList = ({ items, title }) => {
  const renderedItems = items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <Container className="list" grid={true} contWidth="100%">
      <div className="headerWrapper">
        <h4>{title}</h4>
      </div>
      <ul className="skills">{renderedItems}</ul>
    </Container>
  );
};

export default PreviewList;
