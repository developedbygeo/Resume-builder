import useMultipleSlices from '../../hooks/useMultipleSlices';
import React, { useContext } from 'react';
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

const Preview = (props, ref) => {
  const allEmployment = useMultipleSlices('employ');
  const allEducation = useMultipleSlices('edu');
  const {
    defaultState: {
      information: {
        imageInfo,
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

  const renderedPhoto = imageInfo && (
    <ImgContainer
      className="img-container"
      imageSrc={imageInfo.path}
      imageSize={imageInfo.size}
    ></ImgContainer>
  );

  return (
    <PreviewContainer ref={ref}>
      <StyledAside>
        {renderedPhoto ? renderedPhoto : <div></div>}
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

export default React.forwardRef(Preview);
