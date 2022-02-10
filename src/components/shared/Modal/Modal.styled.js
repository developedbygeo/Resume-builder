import styled, { css, keyframes } from 'styled-components';
import { devices } from '../themeSettings';

const max = css`
  width: 100%;
  height: 100%;
`;

const houdiniAct = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
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
  z-index: 30;
  background-color: white;
  padding: ${({ modPadding }) => modPadding || '0'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  animation: ${houdiniAct} 400ms ease-in-out;
  @media ${devices.desktop} {
    top: 1%;
    width: 35%;
    left: 50%;
    transform: translate(-50%);
  }
`;

const modalDialogue = css`
  left: 5%;
  width: 90%;
  border-radius: 1rem;
`;
const modalPreview = css`
  width: 100%;
`;

const deleteStyle = css`
  ${({ theme: { mixins } }) =>
    mixins.flexMixin('space-between', 'space-between', 'column')};
  height: 40rem;
  @media ${devices.desktop} {
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const previewStyle = css`
  min-height: 80vh;
  height: auto;
  max-height: 95vh;
  max-width: 100vw;
  top: 0vh;
  margin: auto;
`;

const prevActionsStyling = css`
  position: absolute;
  bottom: -8%;
  left: 2%;
  @media ${devices.desktop} {
    left: 0%;
    width: 100%;
  }
`;

const getDivStyle = (props) => {
  if (props.backdrop) {
    return backdropStyle;
  } else {
    return modalStyle;
  }
};

const getModalSize = (props) => (props.dialogue ? modalDialogue : modalPreview);

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
  ${getModalSize}

  &>.actions {
    ${({ theme: { mixins } }) =>
      mixins.gridMixin('repeat(2, 1fr)', '1fr', 'center', 'center')};
    gap: 1rem;
    & > button {
      border-radius: 0.5rem 0.5rem 0 0;
      &:hover {
        transform: scale(1);
      }
    }
  }
  & > .prevActions {
    ${prevActionsStyling}
  }
  & > h2 {
    text-align: center;
  }
  & > .warningHeader {
    padding: 1.2rem;
  }
  & > .svgCont {
    ${max}
    & > svg {
      ${max}
    }
  }
  #document {
    animation: ${houdiniAct} 2s ease-in-out infinite alternate;
  }

  & > .previewCont {
    ${max}
  }
`;

export default DynamicDiv;
