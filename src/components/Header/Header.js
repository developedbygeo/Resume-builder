import { useState } from 'react';
import { DownloadButton, TrashButton } from './NavButtons';
import { Nav, StyledHeader } from './Header.styled';
import { Logo } from './Logo.styled';
import { LogoContainer } from '../shared/Container.styled';
import logoImg from '../../assets/logo.svg';
import Modal from '../shared/Modal/Modal';
import { ClearFormsDialogue, PreviewDialogue } from '../shared/Modal/Dialogues';

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
    <Modal onDisable={modalToggleHandler} deleteMenu="true">
      <ClearFormsDialogue onDisable={modalToggleHandler} />
    </Modal>
  );

  const previewModalView = previewState && (
    <Modal previewMenu="true" onDisable={previewToggleHandler}>
      <PreviewDialogue />
    </Modal>
  );

  return (
    <StyledHeader>
      <div>
        <LogoContainer>
          <Logo src={logoImg} alt="cv-builder-logo" draggable="false" />
        </LogoContainer>
        <Nav>
          <div>
            <TrashButton onModalToggle={modalToggleHandler} />
            <DownloadButton onPreviewToggle={previewToggleHandler} />
          </div>
        </Nav>
      </div>
      {deleteModalView}
      {previewModalView}
    </StyledHeader>
  );
};

export default Header;
