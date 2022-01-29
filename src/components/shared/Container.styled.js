import styled from 'styled-components';
import placeholder from '../../assets/placeholder.png';

export const Container = styled.div`
  width: 95%;
  height: 95%;
  margin: auto;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop || '1rem'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
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

  .photoCont {
    position: absolute;
    top: 13%;
    right: 7%;
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
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  ${({ theme: { mixins } }) =>
    mixins.gridMixin('0.4fr 1fr', '1fr', 'center', 'space-evenly')};

  & > aside {
    grid-area: 1;
  }
`;

export const StyledAside = styled.aside`
  width: 100%;
  height: 100%;
  margin-top: auto;
  ${({ theme: { mixins } }) =>
    mixins.gridMixin('1fr', '0.7fr repeat(3, 1fr)', 'center', 'space-evenly')};
  background-color: ${({ theme }) => theme.colors.cta.standard};

  & > div {
    word-wrap: anywhere;
    h4 {
      width: 90%;
      margin-right: auto;
      height: 2rem;
    }
  }
  & > .img-container {
    height: 80%;
    width: 90%;
    border-radius: 50%;
    border: 2px solid red;
    margin: auto;
  }
`;
