import { Nav, StyledHeader } from './Header.styled';
import { Logo } from './Logo.styled';
import { CtaButton, SecondaryButton } from '../shared/Button.styled';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Logo src="/logo-cv.png" />
        <Nav>
          <div>
            <SecondaryButton title="Clear all entries!">Clear</SecondaryButton>
            <CtaButton title="Download your resume now!">Download</CtaButton>
          </div>
        </Nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
