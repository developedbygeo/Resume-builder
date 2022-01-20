import React from 'react';
import { Container } from './Container.styled';
import { Label, Input } from './Input.styled';
import Toggle from './Toggle/Toggle';

const FormInput = (
  {
    className,
    errorMessage,
    htmlFor,
    label,
    inputId,
    inputChange,
    inputBlur,
    inputType,
    inputValue,
    inputPlaceholder,
    required,
    inputAs,
    isToggle = false,
    toggleTitle,
    minConstraint,
    maxConstraint,
  },
  ref
) => {
  const standardLayout = (
    <Container>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        className={className}
        ref={ref}
        id={inputId}
        onChange={inputChange}
        onBlur={inputBlur}
        type={inputType}
        value={inputValue}
        placeholder={inputPlaceholder}
        required={required}
        as={inputAs}
        min={minConstraint}
        max={maxConstraint}
      />
      {className ? <p>{errorMessage}</p> : null}
    </Container>
  );

  const toggleLayout = (
    <Container>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Toggle
        ref={ref}
        title={toggleTitle}
        id={inputId}
        onChange={inputChange}
      />
      {className ? <p className="tip">{errorMessage}</p> : null}
    </Container>
  );

  const layout = isToggle ? toggleLayout : standardLayout;

  return layout;
};

export default React.forwardRef(FormInput);
