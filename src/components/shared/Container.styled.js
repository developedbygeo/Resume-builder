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
  gap: ${({ gridGap }) => gridGap || 'initial'};
`;

const previewHeaderStyling = css`
  background: ${({ theme }) => theme.colors.previewSecondaryBg};
  color: ${({ theme }) => theme.colors.main};
  border-radius: 0.75rem;
  padding: 0.25rem 0.4rem;
  max-height: 3.5rem;
`;

const previewInnerContGrid = css`
  grid-template-rows: repeat(2, 0.2fr) auto;
  gap: 1rem;
`;

const paragraphStyle = css`
  font-size: 1.5rem;
  padding: 0.25rem;
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

  /* styling the personal info preview section */
  .personalMain {
    ${previewInnerContGrid}
    min-height: 30vh;
    overflow-y: auto;
    h1,
    h2 {
      text-align: center;
    }
    & > .description {
      grid-template-rows: 0.25fr 1fr;
      gap: 0.5rem;
      ${({ theme }) => theme.mixins.maxContainer()};
      & > p {
        ${paragraphStyle}
      }
    }
  }
  /* the preview headers - objective, work experience, education */
  & > .previewHeader {
    ${previewHeaderStyling}
  }
  /* the wrapper & content of work experience / education divs */
  .infoContainer {
    grid-template-rows: 0.2fr auto;
    gap: 0.5rem;
    height: 100%;
    min-height: 20vh;
    max-height: 30vh;
    overflow-y: auto;
    width: 98%;
    & > div {
      ${previewInnerContGrid}
      gap: 0.5rem;
      ${({ theme }) => theme.mixins.maxContainer()};
      position: relative;
      h3 {
        align-self: center;
        padding: 0.25rem;
        font-size: 2rem;
        margin-top: 0.2rem;
      }
    }
    & > div::after {
      content: '';
      position: absolute;
      bottom: -3%;
      height: 0.15rem;
      width: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ebebeb;
    }
    p {
      ${paragraphStyle};
      text-transform: capitalize;
    }
    span {
      font-weight: 600;
    }
    .dates {
      font-weight: 300;
      ${({ theme }) =>
        theme.mixins.flexMixin('space-between', 'center', 'row')};
    }
  }
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
  & > section {
    ${({ theme: { mixins } }) =>
      mixins.gridMixin('1fr', '0.45fr auto', 'center', 'space-evenly')};
    ${({ theme: { mixins } }) => mixins.maxContainer()}
    gap: 0.75rem;

    .desc {
      overflow-wrap: anywhere;
    }
  }
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
    mixins.gridMixin('1fr', '0.1fr repeat(4, 1fr)', 'center', 'flex-start')}
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
    top: 14%;
    right: 5%;
    input {
      height: 7rem;
      width: 7rem;
    }
  }
`;

export const ProgressBar = styled.figure`
  ${({ theme: { mixins } }) => mixins.flexMixin('center', 'center', 'column')};
  height: 100%;
  max-height: 2rem;
  border: none;
  width: ${({ barWidth }) => `${barWidth}%`};
  background: ${({ theme }) => theme.colors.header};
  border-radius: 1rem 1rem 0 0;
  & > div {
    position: relative;
    ${({ theme: { mixins } }) => mixins.maxContainer()}
    background: ${({ theme }) => theme.colors.progressBar};
    min-height: 1.5rem;
  }
`;
export const ProgressFigcaption = styled.figcaption`
  position: absolute;
  color: ${({ theme }) => theme.colors.main};
  text-align: center;
  font-size: ${({ fontSize }) => fontSize || '1.5rem'};
  height: fit-content;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  width: inherit;
  max-width: 100%;
`;

export const ImgContainer = styled.div`
  width: auto;
  height: auto;
  border-radius: 50%;
  position: relative;
  background-image: url(${({ imageSrc }) => imageSrc || placeholder});
  background-size: cover;
`;

const asideText = css`
  width: 100%;
  font-size: 1.45rem;
  color: ${({ theme }) => theme.colors.main};
  overflow-wrap: anywhere;
`;

export const StyledAside = styled.aside`
  width: 100%;
  height: 100%;
  min-height: 80vh;
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
    border: 2px solid ${({ theme }) => theme.colors.previewSecondaryBg};
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
    gap: 1rem;
    svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.headerTitles};
    }
    p {
      ${asideText}
    }
  }
  & > .list {
    grid-template-rows: repeat(5, 1fr);
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
