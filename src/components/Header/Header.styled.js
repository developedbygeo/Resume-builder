import styled, { css } from 'styled-components';
import { devices } from '../shared/themeSettings';
import Button from '../shared/Button.styled';

const defaultSettings = css`
  height: 100%;
  width: 100%;
`;

export const Nav = styled.nav`
  ${defaultSettings}
  margin: auto;

  & > div {
    ${defaultSettings}
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    align-items: flex-end;
    justify-items: center;
  }
  & button {
    margin-bottom: 1rem;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  background: ${({ theme }) => theme.colors.header};

  & > div {
    width: 95%;
    height: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 0.2fr;
  }
`;
