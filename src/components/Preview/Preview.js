import { useContext } from 'react';
import { InfoContext } from '../../store/infoContext';
import {
  StyledAside,
  PreviewContainer,
  ImgContainer,
  Container,
} from '../shared/Container.styled';

const Preview = () => {
  const {
    defaultState: {
      information: { personal, additional, contact, employment, education },
    },
  } = useContext(InfoContext);

  return (
    <PreviewContainer>
      <StyledAside>
        <ImgContainer
          className="img-container"
          imageSrc="https://pbs.twimg.com/media/Ec6Zb5bWoAcIysH.jpg"
        ></ImgContainer>
        <Container>
          <div className="headerWrapper">
            <h4>Contact</h4>
          </div>
        </Container>
        <Container>
          <div className="headerWrapper">
            <h4>Skills</h4>
          </div>
        </Container>
        <Container>
          <div className="headerWrapper">
            <h4>References</h4>
          </div>
        </Container>
      </StyledAside>
    </PreviewContainer>
  );
};

export default Preview;
