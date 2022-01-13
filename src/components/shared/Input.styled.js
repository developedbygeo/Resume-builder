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
`;

export const ImgInput = styled(Input)`
  padding: 0;
  border-radius: 50%;
  opacity: 0;
  cursor: pointer;
`;

export const Label = styled.label`
  letter-spacing: 0.1rem;
`;
