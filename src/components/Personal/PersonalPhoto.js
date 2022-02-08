import { useContext } from 'react';
import { InfoContext } from '../../store/infoContext';
import { ImgContainer } from '../shared/Container.styled';
import { ImgInput } from '../shared/Input.styled';

// the File object always measures in bytes
const checkImageSize = (imageSize) => {
  if (imageSize >= 2_000_000) {
    return 'large';
  }
  if (imageSize < 2_000_000 && imageSize >= 1_000_000) {
    return 'medium';
  }
  if (imageSize < 1_000_000 && imageSize >= 500_000) {
    return 'smallMed';
  }
  if (imageSize < 500_000) {
    return 'small';
  }
};

const PersonalPhoto = () => {
  const { addImage } = useContext(InfoContext);

  const imageUploadHandler = (e) => {
    const size = checkImageSize(e.target.files[0].size);
    const path = URL.createObjectURL(e.target.files[0]);
    addImage({ path, size });
  };

  return (
    <ImgContainer backgroundPos="center" className="photoCont">
      <ImgInput
        onChange={imageUploadHandler}
        title="Provide your photo (optional)"
        type="file"
      />
    </ImgContainer>
  );
};

export default PersonalPhoto;
