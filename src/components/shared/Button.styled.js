import styled, { css } from 'styled-components';

const prevButtonStyling = css`
  border-radius: 0.5rem;
  padding: 1.3rem 5rem;
`;

const getPrevBtnStyling = (props) => {
  if (props.prevBtn) {
    return prevButtonStyling;
  }
};

export const Button = styled.button`
  cursor: pointer;
  font-weight: 600;
  border-radius: 1.5rem;
  padding: 0.75rem 2rem;
  text-align: center;
  border: none;
  outline: none;
  transition: all 100ms ease-in-out;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: ${({ buttonWidth }) => buttonWidth || 'auto'};
  background: ${({ buttonBg }) => buttonBg || 'inherit'};
  color: ${({ buttonClr }) => buttonClr || 'white'};
  align-self: ${({ alignSelf }) => alignSelf || 'inherit'};

  &:hover {
    transform: scale(1.05);
  }
`;

export const NavButton = styled(Button)`
  height: 4rem;
  width: 3rem;
  font-size: 2.4rem;
  background: transparent;
  color: #ebebeb;
  border: none;
  transition: all 100ms ease-in-out;
  border-radius: 0;
  padding: 0;

  &:not(:disabled):hover {
    transform: scale(1.05);
    color: #ffffff;
    border: none;
    border-bottom: 1px solid #ffffff;
  }

  &:not(:disabled):hover:active {
    transform: scale(1.05) translateY(0.125rem);
  }

  &:not(:disabled):active {
    transform: translateY(0.125rem);
  }
`;

export const CtaButton = styled(Button)`
  background: ${({ theme }) => theme.colors.cta.standard};
  ${getPrevBtnStyling}

  &:hover {
    background: ${({ theme }) => theme.colors.cta.hover};
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.secondary.standard};
  ${getPrevBtnStyling}

  &:hover {
    background: ${({ theme }) => theme.colors.secondary.hover};
  }
`;
export const AddMoreDetails = styled(Button)`
  background: transparent;
  box-shadow: 0;
  margin-block: 2rem;
  color: #1d3557;
  box-shadow: none;
  &:hover {
    color: #31b1d8;
    transform: none;
  }
`;
