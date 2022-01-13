import StyledToggle from './Toggle.styled';

const Toggle = ({ title, id, onChange }) => {
  return (
    <StyledToggle title={title || ''}>
      <input type="checkbox" id={id} onChange={onChange} />
      <span />
    </StyledToggle>
  );
};

export default Toggle;
