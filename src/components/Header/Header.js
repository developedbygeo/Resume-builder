import { useState } from 'react';
import { DownloadButton, TrashButton } from './NavButtons';
import { StyledHeader } from './Header.styled';
import { LogoContainer } from '../shared/Container.styled';
import logoImg from '../../assets/logo.svg';
import Modal from '../shared/Modal/Modal';
import { ClearFormsDialogue, PreviewDialogue } from '../shared/Modal/Dialogues';
import { CtaButton, SecondaryButton } from '../shared/Button.styled';

const Header = () => {
  const [modalState, setModalState] = useState(false);
  const [previewState, setPreviewState] = useState(false);

  const modalToggleHandler = () => {
    setModalState((prevState) => !prevState);
  };

  const previewToggleHandler = () => {
    setPreviewState((prevState) => !prevState);
  };

  const deleteModalView = modalState && (
    <Modal dialogue="true" onDisable={modalToggleHandler} deleteMenu="true">
      <ClearFormsDialogue onDisable={modalToggleHandler} />
    </Modal>
  );

  const previewModalView = previewState && (
    <Modal previewMenu="true" onDisable={previewToggleHandler}>
      <PreviewDialogue onDisable={previewToggleHandler} />
      <div className="actions prevActions">
        <SecondaryButton
          title="Back to Editing"
          onClick={previewToggleHandler}
          prevBtn={true}
        >
          Cancel
        </SecondaryButton>
        <CtaButton title="Generate a PDF" prevBtn={true}>
          Download now
        </CtaButton>
      </div>
    </Modal>
  );

  return (
    <StyledHeader>
      <div>
        <LogoContainer>
          <img src={logoImg} alt="cv-builder-logo" draggable="false" />
        </LogoContainer>
        <nav>
          <div>
            <TrashButton onModalToggle={modalToggleHandler} />
            <DownloadButton onPreviewToggle={previewToggleHandler} />
          </div>
        </nav>
      </div>
      {deleteModalView}
      {previewModalView}
    </StyledHeader>
  );
};

export default Header;
