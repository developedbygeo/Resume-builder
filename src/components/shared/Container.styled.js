import styled, { css } from 'styled-components';
import placeholder from '../../assets/placeholder.png';

const flexLayout = css`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop || '1rem'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
`;

const customGridLayout = css`
  display: grid;
  grid-template-rows: ${({ gridRows }) => gridRows || 'auto'};
  grid-template-columns: ${({ gridColumns }) => gridColumns || '1fr'};
`;

const getLayout = (props) => {
  if (props.grid) {
    return customGridLayout;
  } else {
    return flexLayout;
  }
};

export const Container = styled.div`
  width: ${({ contWidth }) => contWidth || '95%'};
  height: 95%;
  margin: auto;
  ${getLayout}
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 10vh;
`;

export const LayoutContainer = styled(Container)`
  margin-top: 0;
  gap: 3rem;
  ${({ theme: { mixins } }) =>
    mixins.gridMixin('1fr', 'repeat(4, 1fr)', 'center', 'flex-start')}
`;

export const StyledSection = styled.section`
  display: grid;
  height: auto;
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop || '0'};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
  padding-bottom: 3rem;

  & > button {
    grid-row: 999;
    justify-self: flex-start;
  }
  & > div {
    width: 100%;
  }

  .editContainer {
    justify-content: space-between;
    width: 100%;
    max-width: 45rem;
    padding: 1rem;
  }

  & .photoCont {
    position: absolute;
    top: 13%;
    right: 5%;
    input {
      height: 7rem;
      width: 7rem;
    }
  }
`;

export const ImgContainer = styled.div`
  width: auto;
  height: auto;
  border-radius: 50%;
  position: relative;
  background-image: url(${({ imageSrc }) => imageSrc || placeholder});
  background-size: cover;
`;

export const PreviewContainer = styled(Container)`
  height: 100%;
  width: 100%;
  margin: 0;
  ${({ theme: { mixins } }) =>
    mixins.gridMixin('0.58fr 1fr', '1fr', 'center', 'space-evenly')};

  & > aside {
    grid-area: 1;
  }
`;

const asideText = css`
  width: 100%;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.main};
  overflow-wrap: anywhere;
`;

export const StyledAside = styled.aside`
  width: 100%;
  height: 100%;
  max-height: 80vh;
  margin-top: auto;
  ${({ theme: { mixins } }) =>
    mixins.gridMixin('1fr', '0.7fr repeat(3, 1fr)', 'center', 'space-evenly')};
  background-color: ${({ theme }) => theme.colors.cta.standard};
  border-radius: 0;

  & > div {
    word-wrap: anywhere;
    justify-content: space-between;

    h4 {
      width: 90%;
      margin-right: auto;
      height: 2rem;
    }
  }
  & > .img-container {
    height: 90%;
    width: 80%;
    border-radius: 50%;
    border: 2px solid red;
    margin: auto;
  }
  .headerWrapper {
    width: 95%;
    height: 3rem;
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.headerTitles};
    border-radius: 0 0.5rem 0.5rem 0;
    padding: 0.25rem 0.5rem;
  }
  .wrapCont {
    place-items: center;
    gap: 0.5rem;
    svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.headerTitles};
    }
    p {
      ${asideText}
    }
  }
  .skills {
    width: 80%;
    ${({ theme: { mixins } }) =>
      mixins.gridMixin('1fr', 'auto', 'center', 'center')};
    justify-self: center;
    align-self: flex-start;
    gap: 1rem;
    & > li {
      text-transform: capitalize;
      ${asideText}
      &::marker {
        color: ${({ theme }) => theme.colors.headerTitles};
      }
    }
  }
`;
