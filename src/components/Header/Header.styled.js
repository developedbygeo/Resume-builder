import styled, { css } from 'styled-components';

const defaultSettings = css`
  height: 100%;
  width: 100%;
`;

export const Nav = styled.nav`
  ${defaultSettings}
  margin: auto;

  & > div {
    ${defaultSettings}
    ${({ theme: { mixins } }) => mixins.gridMixin('repeat(2, 1fr)', '1fr')};
    gap: 2rem;
    align-items: flex-end;
    justify-items: center;
  }
  & button {
    margin-bottom: 2rem;
  }
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
`;
