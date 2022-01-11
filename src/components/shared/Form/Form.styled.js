import styled from 'styled-components';

const StyledForm = styled.form`
  gap: 1rem;
  ${({ theme: { mixins } }) => mixins.maxContainer()}
  ${({ theme: { mixins } }) => mixins.gridMixin('1fr', 'auto')}
  align-items: ${({ alignGrid }) => alignGrid || 'center'};
  justify-items: ${({ justifyGrid }) => justifyGrid || 'center'};

  & > button {
    background: ${({ buttonBg }) => buttonBg || 'inherit'};
    color: ${({ buttonClr }) => buttonClr || 'white'};
  }
  & label {
    margin-block: 1rem;
  }
  & input {
  }
  & textarea {
    resize: none;
  }
  & input,
  & textarea {
    width: ${({ width }) => width || 'auto'};
  }
`;

export default StyledForm;
