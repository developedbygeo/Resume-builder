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
  const {
    defaultState: {
      information: {
        personal,
        additional,
        contact,
        employment,
        education,
        extraInfo: { skills, languages },
      },
    },
  } = useContext(InfoContext);

  return (
    <PreviewContainer>
      <StyledAside>
        <ImgContainer
          className="img-container"
          imageSrc="https://pbs.twimg.com/media/Ec6Zb5bWoAcIysH.jpg"
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
          <PreviewExperience employment={employment} />
        </Container>
        <Container grid={true} className="infoContainer">
          <h3 className="previewHeader">Education</h3>
          <PreviewExperience education={education} />
        </Container>
      </section>
    </PreviewContainer>
  );
};

export default Preview;
