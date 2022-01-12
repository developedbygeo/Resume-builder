import styled from 'styled-components';

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #d2ddee;
    transition: all 350ms ease-in-out;
    border-radius: 30px;
    ::before {
      content: '';
      position: absolute;
      height: 13px;
      width: 13px;
      left: 4px;
      bottom: 3px;
      background-color: white;
      transition: all 250ms linear;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background: #31b1d8;
  }

  input:checked + span::before {
    transform: translateX(30px);
  }
`;

export default StyledToggle;
