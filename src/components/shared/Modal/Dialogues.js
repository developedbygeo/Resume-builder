import { useContext } from 'react';
import { InfoContext } from '../../../store/infoContext';
import { CtaButton, SecondaryButton } from '../Button.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as DeleteImage } from '../../../assets/deleteImg.svg';
import Preview from '../../Preview/Preview';

export const ClearFormsDialogue = ({ onDisable }) => {
  const { reset } = useContext(InfoContext);

  const clearHandler = () => {
    reset();
    onDisable();
  };

  return (
    <>
      <h2>Are you sure you want to clear all data?</h2>
      <div className="svgCont">
        <DeleteImage />
      </div>
      <div className={'actions'}>
        <CtaButton title="Yes, clear everything" onClick={clearHandler}>
          <FontAwesomeIcon icon={faCheck} />
        </CtaButton>
        <SecondaryButton title="No, I have changed my mind" onClick={onDisable}>
          <FontAwesomeIcon icon={faTimes} />
        </SecondaryButton>
      </div>
    </>
  );
};

export const PreviewDialogue = () => {
  return (
    <div className="previewCont">
      <Preview />
    </div>
  );
};
