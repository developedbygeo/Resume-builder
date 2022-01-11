import { Input, Label } from '../Input.styled';
import { Container } from '../Container.styled';
import { CtaButton } from '../Button.styled';
import StyledForm from './Form.styled';

const Form = ({
  formDetails,
  labelColor,
  alignItems,
  prefWidth,
  btnWidth,
  btnAlign,
}) => {
  return (
    <StyledForm width={prefWidth}>
      {formDetails.map(
        ({ label, placeholder, required, description, id, type }) => {
          return (
            <Container key={id} align={alignItems}>
              <Label
                htmlFor={label.split(' ').join('')}
                labelColor={labelColor}
              >
                {label}
              </Label>
              {!description && (
                <Input
                  id={label.split(' ').join('')}
                  placeholder={placeholder || ''}
                  required={required}
                  type={type}
                ></Input>
              )}
              {description && (
                <Input
                  id={label.split(' ').join('')}
                  as={'textarea'}
                  placeholder={placeholder || ''}
                  required={required}
                  type={type}
                ></Input>
              )}
            </Container>
          );
        }
      )}
      <Container align={btnAlign}>
        <CtaButton type="submit" buttonWidth={btnWidth}>
          Save
        </CtaButton>
      </Container>
    </StyledForm>
  );
};

export default Form;
