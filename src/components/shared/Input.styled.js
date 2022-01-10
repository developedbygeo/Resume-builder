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
  padding: 0.2rem 2.5rem;
  border-radius: 1rem;
  border: 1px solid #475569;
  outline: none;
  animation: ${inputAppear} 200ms ease-in-out;

  &:focus {
    border-color: #57b7df;
  }
`;

export const Label = styled.label`
  letter-spacing: 0.1rem;
  font-weight: ${({ labelWeight }) => labelWeight || '300'};
  color: ${({ labelColor }) => labelColor || '#475569'};
`;
