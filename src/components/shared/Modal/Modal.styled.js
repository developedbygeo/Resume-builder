import styled, { css, keyframes } from 'styled-components';

const max = css`
  width: 100%;
  height: 100%;
`;

const modalSlide = keyframes`
from{
  opacity: 0;
  transform: translateY(-3rem)
}
to{
  opacity: 1;
  transform: translateY(0)
}
`;

const documentDelete = keyframes`
from{
  opacity: 1;
}to{
  opacity: 0
}
`;

const backdropStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.65);
`;

const modalStyle = css`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  z-index: 30;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  animation: ${modalSlide} 400ms ease-in-out;
`;

const deleteStyle = css`
  ${({ theme: { mixins } }) =>
    mixins.flexMixin('space-between', 'space-between', 'column')};
  height: 40rem;
`;

const previewStyle = css`
  height: 80vh;
  top: 10vh;
  margin: auto;
`;

const getDivStyle = (props) => {
  if (props.backdrop) {
    return backdropStyle;
  } else {
    return modalStyle;
  }
};

const getModalLayout = (props) => {
  if (props.deleteMenu) {
    return deleteStyle;
  }
  if (props.previewMenu) {
    return previewStyle;
  } else {
    return '';
  }
};

const DynamicDiv = styled.div`
  ${getDivStyle}
  ${getModalLayout}

  &>.actions {
    ${({ theme: { mixins } }) =>
      mixins.gridMixin('repeat(2, 1fr)', '1fr', 'center', 'center')};
    gap: 1rem;
  }
  & > h2 {
    text-align: center;
  }
  & > .svgCont {
    ${max}
    & > svg {
      ${max}
    }
  }
  #document {
    animation: ${documentDelete} 2s ease-in-out infinite alternate;
  }

  & > .previewCont {
    ${max}
  }
`;

export default DynamicDiv;
