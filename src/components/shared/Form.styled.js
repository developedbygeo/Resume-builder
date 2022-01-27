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
    font-family: 'Montserrat', sans-serif;
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
  & input {
    width: 7rem;
    height: 7rem;
  }
  & textarea {
    resize: vertical;
    height: 12rem;
  }
  & input,
  & textarea {
    width: ${({ width }) => width || '100%'};
    border-radius: 0.5rem 1rem 0 0;
    border: 2px solid transparent;
  }
  & input:focus,
  & textarea:focus {
    border-bottom: 2px solid #31b1d8;
    caret-color: #31b1d8;
  }
  & button {
    width: ${({ buttonWidth }) => buttonWidth || '10rem'};
    height: 4.5rem;
    transition: all 100ms ease-in-out;
  }
  & button:disabled {
    cursor: not-allowed;
    background: #d3ddee;
    color: ${({ theme }) => theme.colors.footer};
  }

  .invalid {
    border: ${({ theme }) => theme.colors.errorBorder};
    background-color: ${({ theme }) => theme.colors.errorBg};
  }
  .invalid ~ p {
    color: #b40e0e;
    letter-spacing: 0.1rem;
    font-weight: 600;
    margin-top: 1rem;
  }
  .tip {
    color: #1e3657;
  }
`;

export default StyledForm;
