import styled, { keyframes } from 'styled-components';

const inputAppear = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }`;

export const Input = styled.input`
  animation: ${inputAppear} 200ms ease-in-out;
  ${({ theme: { mixins } }) => mixins.inputStyle()}

  &:focus {
    border-color: #57b7df;
  }
`;

export const ImgInput = styled(Input)`
  padding: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  opacity: 0;
  cursor: pointer;
`;

export const Label = styled.label`
  letter-spacing: 0.1rem;
  font-weight: ${({ labelWeight }) => labelWeight || '300'};
  color: ${({ labelColor }) => labelColor || '#475569'};
`;
