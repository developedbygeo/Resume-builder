import reactDom from 'react-dom';
import DynamicDiv from './Modal.styled';

const modalContainer = document.querySelector('#overlay');

const Backdrop = ({ onDisable }) => {
  return <DynamicDiv onClick={onDisable} backdrop="true" />;
};

const ModalOverlay = ({ children, deleteMenu, previewMenu }) => {
  return (
    <DynamicDiv deleteMenu={deleteMenu} previewMenu={previewMenu}>
      {children}
    </DynamicDiv>
  );
};

const Modal = ({ onDisable, children, deleteMenu, previewMenu }) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onDisable={onDisable} />,
        modalContainer
      )}
      {reactDom.createPortal(
        <ModalOverlay deleteMenu={deleteMenu} previewMenu={previewMenu}>
          {children}
        </ModalOverlay>,
        modalContainer
      )}
    </>
  );
};

export default Modal;
