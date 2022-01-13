import { ImgContainer } from '../shared/Container.styled';
import { ImgInput } from '../shared/Input.styled';

const PersonalPhoto = () => {
  return (
    <ImgContainer className="photoCont">
      <ImgInput title="Provide your photo (optional)" type="file" />
    </ImgContainer>
  );
};

export default PersonalPhoto;
