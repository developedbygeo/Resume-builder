import styled from 'styled-components';

const StyledForm = styled.form`
  gap: 1rem;
  ${({ theme: { mixins } }) => mixins.maxContainer()}
  ${({ theme: { mixins } }) => mixins.gridMixin('1fr', 'auto')}
  align-items: ${({ alignGrid }) => alignGrid || 'center'};
  justify-items: ${({ justifyGrid }) => justifyGrid || 'center'};

  & > div {
    align-items: ${({ align }) => align || 'flex-start'};
  }

  input::placeholder,
  textarea::placeholder {
    font-size: 1.6rem;
  }

  & > button {
    background: ${({ buttonBg }) => buttonBg || 'inherit'};
    color: ${({ buttonClr }) => buttonClr || 'white'};
  }
  & label {
    color: ${({ labelColor }) => labelColor || '#475569'};
    font-weight: ${({ labelWeight }) => labelWeight || '400'};
    margin-block: 1rem;
  }
  & textarea {
    resize: none;
  }
  & input,
  & textarea {
    width: ${({ width }) => width || '90%'};
  }
  & input:focus,
  & textarea:focus {
    border-bottom: 2px solid #31b1d8;
  }
  & button {
    width: ${({ buttonWidth }) => buttonWidth || 'auto'};
  }
`;

export default StyledForm;
