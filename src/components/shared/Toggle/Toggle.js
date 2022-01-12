import StyledToggle from './Toggle.styled';

const Toggle = (title) => {
  return (
    <StyledToggle title={title || ''}>
      <input type="checkbox" />
      <span />
    </StyledToggle>
  );
};

export default Toggle;
