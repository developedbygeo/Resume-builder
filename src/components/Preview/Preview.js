import useMultipleSlices from '../../hooks/useMultipleSlices';
import { useContext } from 'react';
import { InfoContext } from '../../store/infoContext';
import {
  StyledAside,
  PreviewContainer,
  ImgContainer,
  Container,
} from '../shared/Container.styled';
import PreviewContact from './PreviewContact';
import PreviewList from './PreviewList';
import PreviewMain from './PreviewMain';
import PreviewExperience from './PreviewExperience';

const Preview = () => {
  const allEmployment = useMultipleSlices('employ');
  const allEducation = useMultipleSlices('edu');
  const {
    defaultState: {
      information: {
        personal,
        additional,
        contact,
        extraInfo: { skills, languages },
      },
    },
  } = useContext(InfoContext);

  const renderedEmployment = allEmployment.map((info, index) => (
    <PreviewExperience key={index} employment={info} />
  ));

  const renderedEducation = allEducation.map((info, index) => (
    <PreviewExperience key={index} education={info} />
  ));

  return (
    <PreviewContainer>
      <StyledAside>
        <ImgContainer
          className="img-container"
          imageSrc="https://i.pinimg.com/originals/b0/b3/d4/b0b3d4c09062b62d1547f86d13bfb221.jpg"
        ></ImgContainer>
        <PreviewContact
          phone={contact.phone}
          email={contact.email}
          linkedin={contact.linkedin}
          additionalDetails={additional}
        />
        <PreviewList title="Skills" items={skills} />
        <PreviewList title="Languages" items={languages} />
      </StyledAside>
      <section>
        <PreviewMain personal={personal} />
        <Container grid={true} className="infoContainer">
          <h3 className="previewHeader">Work Experience</h3>
          {renderedEmployment}
        </Container>
        <Container grid={true} className="infoContainer">
          <h3 className="previewHeader">Education</h3>
          {renderedEducation}
        </Container>
      </section>
    </PreviewContainer>
  );
};

export default Preview;
