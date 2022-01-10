import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  color: white;
  font-weight: 600;
  border-radius: 1.5rem;
  padding: 0.75rem 2rem;
  text-align: center;
  border: none;
  outline: none;
  transition: all 250ms ease-in-out;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CtaButton = styled(Button)`
  background: #31b1d8;

  &:hover {
    background: #218bab;
  }
`;

export const SecondaryButton = styled(Button)`
  background: #475569;
  &:hover {
    background: #323b49;
  }
`;
