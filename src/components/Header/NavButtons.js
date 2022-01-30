import { useContext } from 'react';
import { InfoContext } from '../../store/infoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faEye,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { NavButton } from '../shared/Button.styled';

export const DownloadButton = ({ onPreviewToggle }) => {
  const {
    defaultState: { status },
  } = useContext(InfoContext);
  const isDownloadReady = Object.values(status).every((el) => el);
  const icon = isDownloadReady ? faDownload : faEye;
  const title = isDownloadReady ? 'Download your CV' : 'Preview your CV';

  return (
    <NavButton onClick={onPreviewToggle} title={title}>
      <FontAwesomeIcon icon={icon} />
    </NavButton>
  );
};

export const TrashButton = ({ onModalToggle }) => {
  return (
    <NavButton onClick={onModalToggle} title="Clear all fields">
      <FontAwesomeIcon icon={faTrashAlt} />
    </NavButton>
  );
};
