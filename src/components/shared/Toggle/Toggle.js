import React from 'react';
import StyledToggle from './Toggle.styled';

const Toggle = ({ title, id, onChange }, ref) => {
  return (
    <StyledToggle title={title || ''}>
      <input type="checkbox" id={id} onClick={onChange} ref={ref} />
      <span />
    </StyledToggle>
  );
};

export default React.forwardRef(Toggle);
