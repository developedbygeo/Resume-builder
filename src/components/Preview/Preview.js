import { useContext } from 'react';
import { InfoContext } from '../../store/infoContext';
import {
  StyledAside,
  PreviewContainer,
  ImgContainer,
  Container,
} from '../shared/Container.styled';
import PreviewContact from './PreviewContact';
import PreviewSkills from './PreviewSkills';

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
        <PreviewSkills skills={skills} />
        <Container>
          <div className="headerWrapper">
            <h4>Languages</h4>
          </div>
        </Container>
      </StyledAside>
    </PreviewContainer>
  );
};

export default Preview;
