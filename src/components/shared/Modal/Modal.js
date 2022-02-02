import reactDom from 'react-dom';
import DynamicDiv from './Modal.styled';

const modalContainer = document.querySelector('#overlay');

const Backdrop = ({ onDisable }) => {
  return <DynamicDiv onClick={onDisable} backdrop="true" />;
};

const ModalOverlay = ({ children, deleteMenu, previewMenu, dialogue }) => {
  return (
    <DynamicDiv
      dialogue={dialogue}
      deleteMenu={deleteMenu}
      previewMenu={previewMenu}
    >
      {children}
    </DynamicDiv>
  );
};

const Modal = ({ onDisable, children, deleteMenu, previewMenu, dialogue }) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onDisable={onDisable} />,
        modalContainer
      )}
      {reactDom.createPortal(
        <ModalOverlay
          dialogue={dialogue}
          deleteMenu={deleteMenu}
          previewMenu={previewMenu}
        >
          {children}
        </ModalOverlay>,
        modalContainer
      )}
    </>
  );
};

export default Modal;
