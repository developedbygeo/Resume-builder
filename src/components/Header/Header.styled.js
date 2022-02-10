import styled, { css } from 'styled-components';
import { devices } from '../shared/themeSettings';

const defaultSettings = css`
  height: 100%;
  width: 100%;
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  background: ${({ theme }) => theme.colors.header};

  & > div {
    width: 95%;
    height: 100%;
    margin: auto;
    ${({ theme: { mixins } }) => mixins.gridMixin('1fr 0.2fr', '1fr')}
    gap: 3rem;
  }

  nav {
    ${defaultSettings}
    margin: auto;
    @media ${devices.desktop} {
      max-width: 20rem;
    }
    div {
      ${defaultSettings}
      ${({ theme: { mixins } }) => mixins.gridMixin('repeat(2, 1fr)', '1fr')};
      gap: 2rem;
      align-items: center;
      justify-items: center;
    }
  }
`;
