import styled from 'styled-components';
import placeholder from '../../assets/placeholder.png';

export const Container = styled.div`
  width: 95%;
  height: 95%;
  margin: auto;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: center;
  margin-top: 1rem;
  align-items: ${({ alignItems }) => alignItems || 'center'};
`;

export const LayoutContainer = styled(Container)`
  margin-top: 0;
  gap: 3rem;
  ${({ theme: { mixins } }) =>
    mixins.gridMixin('1fr', 'repeat(4, 1fr)', 'center', 'flex-start')}
`;

export const StyledSection = styled.section`
  height: auto;
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop || '0'};
`;

export const ImgContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
  background-image: url(${({ imageSrc }) => imageSrc || placeholder});
  background-size: cover;
`;
