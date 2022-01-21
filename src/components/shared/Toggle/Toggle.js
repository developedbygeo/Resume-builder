import React from 'react';
import StyledToggle from './Toggle.styled';

const Toggle = ({ title, id, onChange, checked }, ref) => {
  return (
    <StyledToggle title={title || ''}>
      <input
        type="checkbox"
        id={id}
        onClick={onChange}
        ref={ref}
        defaultChecked={checked ? checked : false}
      />
      <span />
    </StyledToggle>
  );
};

export default React.forwardRef(Toggle);
